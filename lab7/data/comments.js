const mongoCollections=require("../config/mongoCollections");
const requiredrRecipes=mongoCollections.recipes;
const recipes=require("./recipes");
const uuidv4 = require('uuid/v4');

//Returns a list of all comments in the specified recipe
async function getCommentsByRecipeId(recipeId) {
    const theRecipe=await recipes.getRecipeById(recipeId);
    const theComments=theRecipe.comments;
    const result=[];
    for(let i=0;i<theComments.length;i++){
        let commentsResult={
            _id:theComments[i]._id,
            recipeId:theRecipe._id,
            recipeTitle:theRecipe.title,
            poster:theComments[i].poster,
            comment:theComments[i].comment  
        } 
        result.push(commentsResult);   
    }  
    return result;
}

//Returns the comment specified by that commentId
async function getCommentByCommentId(id) { 
    if(id===undefined) throw "Please provide an id.";
    const recipesCollection=await requiredrRecipes();
    const theRecipes=await recipes.getAllRecipes();
    const result=[];
    for(let i=0;i<theRecipes.length;i++){
        const theComments = await this.getCommentsByRecipeId(theRecipes[i]._id);
        if (theComments) {
            for(let i=0;i<theComments.length;i++){
                if(theComments[i]._id===id){
                    result.push(theComments[i]);
                }
            }
        }      
    }
    return result;
}

//Creates a new comment with the supplied data in the request body for the stated recipe, and return the new comment
async function addComment(recipeId,poster,comment) {
    const recipesCollection=await requiredrRecipes();
    const theRecipe=await recipesCollection.findOne({_id: recipeId});
    if (!theRecipe) throw "Recipe not found.";
    let theComment={
        _id:uuidv4(),
        poster:poster,
        comment:comment
    };
    let newComment={
        $push:{comments: theComment}  
    };
    await recipesCollection.updateOne({_id: recipeId},newComment);   
    return theComment;
}

//Updates the specified comment for the stated recipe with only the supplied changes,and return the updated comment
async function updateComment(recipeId,commentId,suppliedChange){
    const recipesCollection=await requiredrRecipes();
    const theRecipe=await recipesCollection.findOne({ _id: recipeId});
    if(theRecipe) {
        if (suppliedChange.comment) {
            recipesCollection.update({'comments._id':commentId}, {$set:{'comments.$.comment': suppliedChange.comment}});
        }
        if (suppliedChange.poster) {
            recipesCollection.update({'comments._id':commentId}, {$set:{'comments.$.poster': suppliedChange.poster}});
        }
    }     
    return await this.getCommentByCommentId(commentId);
}

//Deletes the comment specified
async function deleteComment(id){
    if(!id) throw "No id provided.";

    const recipesCollection=await requiredrRecipes();
    const theRecipes=await recipes.getAllRecipes();
    for(let i=0;i<theRecipes.length;i++){
        const theComments =await this.getCommentsByRecipeId(theRecipes[i]._id);
        if (!theComments) throw "No comments found.";
        for(let j=0;j<theComments.length;j++){
            if(theComments[j]._id===id){
                let deleteCommentInRecipes=await recipesCollection.update(
                    {_id:theRecipes[i]._id},
                    {$pull:{'comments':{_id:id}}}
                )
                if(deleteCommentInRecipes.deleteCount===0) throw "Could not delete the comment.";
            }
        }    
    }
    return "{delete comment:true}";
}

module.exports={getCommentsByRecipeId,getCommentByCommentId,addComment,updateComment,deleteComment};

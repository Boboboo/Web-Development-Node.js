const mongoCollections=require("../config/mongoCollections");
const comments=mongoCollections.comments;
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

async function getCommentByCommentId(id) { 
    if(id===undefined) throw "Please provide an id.";
    const recipesCollection=await requiredrRecipes();
    const theRecipes=await recipes.getAllRecipes();
    for(let i=0;i<theRecipes.length;i++){
        const theComments = getCommentsByRecipeId(theRecipes[i]._id);
        if (theComments) {
            for(let i=0;i<theComments.length;i++){
                if(theComments[i]._id===id){
                    return [theComments[i]];
                }
            }
        }
    }
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
        $push: {comments: theComment}  
    };
    await recipesCollection.updateOne({_id: recipeId},newComment);   
    const commentsCollection=await comments();
    const insertInfo=await commentsCollection.insertOne(theComment);
    if(insertInfo.insertedCount==0) throw "Could not add comment.";
    return theComment;
}

//Updates the specified comment for the stated recipe with only the supplied changes,and return the updated comment
async function updateComment(recipeId,commentId,suppliedChange){
    const recipesCollection=await requiredrRecipes();
    const commentsCollection=await comments();
    const theRecipe=await recipes.getRecipeById(recipeId);
    const theComments=theRecipe.comments;
    const updatedComment={};
    if(suppliedChange.poster){
        updatedComment.poster=suppliedChange.poster;
    }
    if(suppliedChange.comment){
        updatedComment.comment=suppliedChange.comment;
    }
    const updatedInfo1=await commentsCollection.updateOne(
        {_id:commentId},
        {$set:updatedComment}
    ); 
    const updatedRecipe={};
    updatedRecipe.comments={};
    if(suppliedChange.poster){
        updatedRecipe.comments.poster=suppliedChange.poster;
    }
    if(suppliedChange.comment){
        updatedRecipe.comments.comment=suppliedChange.comment;
    }
    const updatedInfo2=await recipesCollection.updateOne(
        {_id:recipeId},
        {$set:updatedRecipe}
    );
    return await this.getCommentByCommentId(commentId);
}

//Deletes the comment specified
async function deleteComment(id){
    if(!id) throw "No id provided.";
    const commentsCollection=await comments();
    const deleteCommentInComments=await commentsCollection.removeOne({_id:id});
    if(deleteCommentInComments.deleteCount===0) throw "Could not delete the comment from commentsCollection.";

    const recipesCollection=await requiredrRecipes();
    const theRecipes=await recipes.getAllRecipes();
    for(let i=0;i<theRecipes.length;i++){
        const theComments =await this.getCommentsByRecipeId(theRecipes[i]._id);
        if (theComments) {
            for(let i=0;i<theComments.length;i++){
                if(theComments[i]._id===id){
                    let deleteCommentInRecipes=await recipesCollection.removeOne({_id:id});
                    if(deleteCommentInRecipes.deleteCount===0) throw "Could not delete the comment from recipesCollection.";
                }
            }
        }
    }
    return "{delete comment:true}";
}

module.exports={getCommentsByRecipeId,getCommentByCommentId,addComment,updateComment,deleteComment};
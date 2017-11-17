const mongoCollections=require("../config/mongoCollections");
const recipes=mongoCollections.recipes;
const uuidv4 = require('uuid/v4');

//Responds with a list of all recipes in the format of {_id: RECIPE_ID, title: RECIPE_TLE}
async function getAllRecipes() {
    const recipesCollection=await recipes();
    const allRecipes=await recipesCollection.find({}).toArray();
    let resultsList=[];
    for(let i=0;i<allRecipes.length;i++){
        let content={
            _id:allRecipes[i]._id,
            title:allRecipes[i].title
        }
        resultsList.push(content);
    }
    return resultsList;  
}


//Responds with the full content of the specified recipe
async function getRecipeById(id){
    if(id===undefined) throw "Please provide an id.";
    const recipesCollection=await recipes();
    const theRecipe=await recipesCollection.findOne({_id:id});
    if(!theRecipe || theRecipe===null) throw "No recipe with that id.";
    return theRecipe;
}

//Creates a recipe with the supplied data in the request body, and returns the new recipe
async function addRecipe(title,ingredients,steps){
    if(typeof title!=="string" || title==="" || title.length===0)  throw "No title provided.";
    if(!Array.isArray(ingredients) || ingredients===null || ingredients.length===0){
        ingredients=[];
    }
    if(!Array.isArray(steps) || steps===null || steps.length===0){
        steps=[];
    }
    const recipesCollection=await recipes();
    let newRecipe={
        _id:uuidv4(),
        title:title,
        ingredients:ingredients,
        steps:steps,
        comments:[]
    }
    const insertInfo=await recipesCollection.insertOne(newRecipe);
    if(insertInfo.insertedCount==0) throw "Could not add recipe.";
    return await this.getRecipeById(insertInfo.insertedId);
}


//Updates the specified recipe with only the supplied changes, and returns the updated recipe
async function updateRecipe(id,suppliedChange){
    const recipesCollection=await recipes();
    const updatedRecipe={};
    if(suppliedChange.title){
        updatedRecipe.title=suppliedChange.title;
    }
    if(suppliedChange.ingredients){
        updatedRecipe.ingredients=suppliedChange.ingredients;
    }
    if(suppliedChange.steps){
        updatedRecipe.steps=suppliedChange.steps;
    }
    if(suppliedChange.comments){
        updatedRecipe.comments=suppliedChange.comments;
    }
    const updatedInfo=await recipesCollection.updateOne(
        {_id:id},
        {$set:updatedRecipe}
    ); 
    return await this.getRecipeById(id);  
}

//Deletes the recipe
async function deleteRecipe(id){
    if(!id) throw "No id provided.";
    const recipesCollection=await recipes();
    const deleteInfo=recipesCollection.removeOne({_id:id});
    if(deleteInfo.deleteCount==0) throw "Could not delete recipe.";
    return "{delete recipe: true}";
}

module.exports={getAllRecipes,getRecipeById,addRecipe,updateRecipe,deleteRecipe};
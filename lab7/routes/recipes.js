const router=require("express").Router();
const data=require("../data");
const recipesData=data.recipes;

//wrap routes in asyncMiddleware, all errors are being caught and handled.
//const asyncMiddleware = require('./utils/asyncMiddleware');

router.get("/", async (req,res)=>{
    try{
        const getData=await recipesData.getAllRecipes();
        res.json(getData);
    }catch(e){
        res.status(500).json({error: e});

    }   
});

router.get("/:id", async (req,res)=>{
    try{
        const getData=await recipesData.getRecipeById(req.params.id);
        res.json(getData);
    }catch(e){
        res.status(404).json({error:"The recipe not found."});
    }
});

router.post("/", async (req,res)=>{
    let recipeInfo=req.body; 
    if (!recipeInfo) {
        res.status(400).json({ error: "You must provide data to create a recipe." });
        return;
    }
    if (!recipeInfo.title) {
        res.status(400).json({ error: "You must provide a title." }); 
        return;
    }
    if (!recipeInfo.ingredients) {
        res.status(400).json({ error: "You must provide ingredients." });
        return;
    }
    if (!recipeInfo.steps) {
        res.status(400).json({ error: "You must provide steps." });
        return;
    }
    try{
        const newRecipe=await recipesData.addRecipe(recipeInfo.title,recipeInfo.ingredients,recipeInfo.steps);
        res.json(newRecipe);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    } 
});

router.put("/:id", async (req,res)=>{
    let recipeInfo=req.body;
    try{
        await recipesData.getRecipeById(req.params.id);
    }catch(e){
        res.status(404).json({ error: "Recipe not found" });
    }
    try{
        const result=await recipesData.updateRecipe(req.params.id,recipeInfo);
        res.json(result);
    }catch(e){
        res.sendStatus(500);
    }
});

router.delete("/:id",async (req,res)=>{
    const recipeInfo=await recipesData.getRecipeById(req.params.id);
    try{
        try{
            const result=await recipesData.deleteRecipe(req.params.id);
            res.sendStatus(200);
        }catch(e){
            res.sendStatus(500);
        }
    }catch(e){
        console.log(e);
        res.status(404).json({ error: "User not found" });
    }
});

module.exports=router;
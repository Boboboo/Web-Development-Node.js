const router=require("express").Router();
const data=require("../data");
const commentsData=data.comments;

router.get("/", async (req,res)=>{
    res.status(200).send("Comment root");
});

router.get("/recipe",async (req,res)=>{
    res.status(200).send("Recipe root");
});


router.get("/recipe/:recipeId", async (req,res)=>{
    try{
        const commentsList=await commentsData.getCommentsByRecipeId(req.params.recipeId);
        res.json(commentsList); 
    }catch(e){
        console.log(e)
        res.status(404).json({error:"The recipe not found."});
    } 
});

router.get("/:commentId", async (req,res)=>{
    try{
        const commentInfo=await commentsData.getCommentByCommentId(req.params.commentId);
        res.json(commentInfo);
    }catch(e){
        console.log(e)
        res.status(404).json({error:"The comment not found."});
    } 
});

router.post("/:recipeId", async (req,res)=>{
    let commentInfo=req.body;
    if(!commentInfo){
        res.status(400).json({error:"You must provide data to create a comment."});
        return;
    }
    if(!commentInfo.poster){
        res.status(400).json({error:"You must provide a poster."});
        return;
    }
    if(!commentInfo.comment){
        res.status(400).json({error:"You must provide comment."});
        return;
    }
    try {
        const result=await commentsData.addComment(req.params.recipeId,commentInfo.poster,commentInfo.comment);
        res.json(result);
    } catch (e){
        console.log(e);
        res.status(500).json({error:e});
    }
});

router.put("/:recipeId/:commentId",async (req,res)=>{
    let commentInfo=req.body;
    if(!commentInfo){
        res.status(400).json({error:"You must provide data to update a comment."});
        return;
    }
    if(!req.params.recipeId){
        res.status(400).json({error:"You must provide a recipeId."});
        return;
    }
    if(!req.params.commentId){
        res.status(400).json({error:"You must provide a commentId."});
        return;
    }
    try{
        const getData=await commentsData.getCommentByCommentId(req.params.commentId);
        try{
            const result=await commentsData.updateComment(req.params.recipeId,req.params.commentId,commentInfo);
            res.json(result);
        }catch(e){
            console.log(e);
            res.status(500).json({error:e});
        }
    }catch(e){
        console.log(e);
        res.status(404).json({error:"Comment not found."});
    }
});



router.delete("/:id", async (req,res)=>{
    try{
    const getComment=await commentsData.getCommentByCommentId(req.params.id);
        try{
            const result=await commentsData.deleteComment(req.params.id);
            res.sendStatus(200);
        }catch(e){
            res.status(500).json({error:e});
        }
    }catch(e){
        res.status(404).json({error:"The comment not found."});
    }
});

module.exports=router;

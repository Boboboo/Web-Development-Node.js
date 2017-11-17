const express=require("express");
const router=express.Router();

const storyData={
    "storyTitle": "Little Black",
    "story": "I have a little black cat, because he is black, so I called him Little Black. Sometimes he likes interactiving with people, sometimes he is independent. Every morning, he likes to jumping up to my bed and sleeps near me for some moments to show his friendliness. But sometimes he ignores me no matter in which way I call him. Several month ago, it was in the morning in Spring, my cat caught a garter snake who woke up from hibernation, and thought it could be a good breakfirst. I resuced the snake and let it go. But my cat was not happy all day long. "
}

router.get("/",(req,res)=>{
    res.json(storyData);
});

router.post("/",(req,res)=>{
    res.status(501).send();
});

module.exports=router;
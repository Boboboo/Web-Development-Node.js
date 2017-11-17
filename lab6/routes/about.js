const express=require("express");
const router=express.Router();
const aboutData={
    "name":"Bo",
    "biograpgy":"My name is Bo, major in Computer Science, and this is my last semester in Stevens. I am interested in web development, so I am seeking for a job in the field of web development now and I hope to be a creative web developer after graduation.",
    "favoriteShows": ["array", "House of Cards", "Game of Thrones", "Fresh Off the Boat"],
    "hobbies": ["Swimming", "Travelling to different places", "Reading books"]
}

router.get("/",(req,res)=>{
    res.json(aboutData);
});

router.post("/",(req,res)=>{
    res.status(501).send();
});

module.exports=router;
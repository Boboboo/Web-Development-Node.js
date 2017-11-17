const express=require("express");
const router=express.Router();
const educationData=[
    {
      "schoolName": "Nanjing Forestry University",
      "degree": "I got Bachelor of Agriculture in Soil and Water Conservation.",
      "favoriteClass": "My favourite class was botany，because we got to moutians and parks for this class to get the knowledge of different plants.",
      "favoriteMemory": "The time peroid is 2008-2012."
    },
    {
      "schoolName": "Nanjing Forestry University",
      "degree": "I got Master of Agriculture in Soil and Water Conservation.",
      "favoriteClass": "My favourite class was Desertification Combating，because I got a lot of knowlwdge about how to combat desertification.",
      "favoriteMemory": "The time peroid is 2012-2015."
    },
    {
      "schoolName": "Stevens Institute of Technology",
      "degree": "I am doing my Master of Science in Computer Science.",
      "favoriteClass": "My favourite class was Database Management，because the teacher was humourous.",
      "favoriteMemory": "The time peroid is 2016-now."
    }
]

router.get("/",(req,res)=>{
    res.json(educationData);
});

router.post("/",(req,res)=>{
    res.status(501).send();
});

module.exports=router;
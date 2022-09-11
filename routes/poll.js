const exp=require("express");
const Pusher=require("pusher");
const router=exp.Router();

const pusher = new Pusher({
    appId: "1474848",
    key: "efbe7c6081158da2877b",
    secret: "69afaa6332a9b038e0ad",
    cluster: "ap2",
    useTLS: true
  });

router.get('/',(req,res)=>{
    res.send("poll")
});
router.post("/",(req,res)=>{
    pusher.trigger("os-poll", "os-vote", {
        points:1,
        os:req.body.os
      });
      return res.json({success:true,message:"Thanks for Voting!"})
})

module.exports=router;
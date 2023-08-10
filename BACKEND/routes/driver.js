const router = require("express").Router();
let Driver = require("../models/driver");

router.route("/add").post((req,res)=>{

    const d_name = req.body.d_name;
    const d_email = req.body.d_email;
    const d_telephone = Number(req.body.d_telephone);
    const d_licNo = req.body.d_licNo;
    const d_experience = req.body.d_experience;
    const v_type = req.body.v_type;
    const v_image = req.body.v_image;
    const d_description = req.body.d_description;
    const d_image = req.body.d_image;

    const newDriver = new Driver({

        d_name,
        d_email,
        d_telephone,
        d_licNo,
        d_experience,
        v_type,
        v_image,
        d_description,
        d_image,
    })

    newDriver.save().then(()=>{
        res.json("Driver Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    Driver.find().then((drivers)=>{
        res.json(drivers)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:d_id").put(async (req,res)=>{
    let userID = req.params.d_id;
    const {d_name,d_email,d_telephone,d_licNo,d_experience,v_type,v_image,d_description,d_images}= req.body;

    const updateDriver = {

        d_name,
        d_email,
        d_telephone,
        d_licNo,
        d_experience,
        v_type,
        v_image,
        d_description,
        d_images
    }
    const update = await Driver.findByIdAndUpdate(userID, updateDriver)
    .then(()=>{
        res.status(200).send({status:"Driver updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Eeeoe with updating data"});
         
    })
        
})

router.route("/delete/:d_id").delete(async (req, res)=>{
    let userID = req.params.d_id;

    await Driver.findByIdAndDelete(userID)
    .then(() => {
        res.status(200).send({status: "Driver deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})

router.route("/get/:d_id").get(async (req, res)=>{
    let userID = req.params.d_id;

    const user = await Driver.findById(userID)
    .then((driver) => {
        res.status(200).send({status: "driver fetched", driver});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetche driver", error: err.message});
    })
})

module.exports = router;

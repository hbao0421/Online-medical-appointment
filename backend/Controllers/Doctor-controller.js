const Doctor  = require("../Model/Doctor");

const addDoctor = async (req, res, next) => {
    const{name, speciality, availability, cost, image} = req.body;
    console.log(name, speciality, availability, cost, image);
    let doctor;
    try{
        doctor = new Doctor({
            name, speciality, availability, cost, image
        })
        await doctor.save();
    } catch(err){
        console.log(err);
    }
    if(!doctor){
        return res.status(500).json({message:"Doctor Not Added"});
    }
    return res.status(201).json({doctor});
}

exports.addDoctor = addDoctor;
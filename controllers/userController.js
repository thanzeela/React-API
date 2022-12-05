const user = require('../models/db');



module.exports.findAll  =   (req, res, next) =>{
    console.log('trig')
  user.findAll().then((i)=>{
    if (i == null) {
        res.send("No data");
    }
    else{
        res.send(i);
    }
    })
   
}


module.exports.createUser =  (req,res, next) => {
     user.create({
        name : req.body.name,
        phone  : req.body.phone,  
        email : req.body.email,
        dob : req.body.dob,
        address :  req.body.address,
        website : req.body.website
    },
    
    
    ).then(
        res.send('created successfuly')
    ).catch(
        res.send('error')
    )

}

module.exports.deleteUser = (req, res, next ) => {
    console.log(req.query)
    let userId = req.query.id;
    user.destroy({
        where : {
             id :  userId
        }
    }).then(
        res.send('deleted successfully')

    ).catch(
        res.send("Error while deleting")
    )
}

module.exports.updateUser =  (req, res, next)=>{
    let userId = req.query.id;
    user.update({
        name : req.body.name,
        phone  : req.body.phone,  
        email : req.body.email,
        dob : req.body.dob,
        address :  req.body.address,
        website : req.body.website
    },
    {
        where: {
            id  : userId
        
        }
    }
    
    ).then(
        res.send('Updated Successfully')

    ).catch(
        res.send('Error while updating')
    )

}   


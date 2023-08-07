const Model3 = require('./models/User.js')


//These are the functions that post data to our database in mongo

async function createUser(req,res){

    //Creating a new instance of our model will post data to our database
    const data = new Model3({
      username:req.body.username,
      password:req.body.password,
    })
  
   try {
    const toSave = await data.save()
    res.status(200).json(toSave)
   } catch (error) {
    res.status(400).json({message:error.message})
    
   }
}
  
  
async function readUser(req,res){
    try{
    const data = await Model3.findOne({username:req.params.username})
    res.json(data)
    }
    catch(error){
    res.status(500).json({message: error.message})
    }
}

async function updateUser(req,res){
try {
    const id = req.params.id;
    const update = req.body
    const options = {new:true}

    const result = await Model3.findByIdAndUpdate(id,update,options)

    res.send(result)
    
} catch (error) {
    res.status(400).json({message: error.message})
}
}


module.exports = {createUser,readUser,updateUser}

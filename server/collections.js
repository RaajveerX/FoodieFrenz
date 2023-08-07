const Model2 = require('./models/Collection.js')


//These are the functions that post data to our database in mongo

async function createCollection(req,res){

    //Creating a new instance of our model will post data to our database
    const data = new Model2({
      user:req.body.user,
      restaurantName:req.body.restaurantName,
    })
  
   try {
    const toSave = await data.save()
    res.status(200).json(toSave)
   } catch (error) {
    res.status(400).json({message:error.message})
    
   }
}

async function readAllCollections(req,res){
  try {
    const data = await Model2.find({user:req.params.user})
    res.json(data)
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}
  
  
async function readCollection(req,res){
      try{
        const data = await Model2.findOne({user:req.params.user});
        res.json(data)
      }
      catch(error){
        res.status(400).json({message: error.message})
      }
}
  
async function updateCollection(req,res){
  try {
    const id = req.params.id;
    const update = req.body
    const options = {new:true}

    const result = await Model2.findByIdAndUpdate(id,update,options)

    res.send(result)
    
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

async function deleteCollection(req,res){
  try {
    const id = req.params.id;
    const result = await Model2.findByIdAndDelete(id)
    res.send(result)
    
  } catch (error) {
    
  }
}


module.exports = {createCollection,readCollection,updateCollection,deleteCollection,readAllCollections}

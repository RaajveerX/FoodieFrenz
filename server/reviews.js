const Model = require('./models/Review.js')


//these are the functions that will ultimately handle data for the reviews


async function createReview(req,res){
  //Model for the our reviews
  const data = new Model({
    user:req.body.user,
    restaurantName:req.body.restaurantName,
    rating:req.body.rating,
    cost:req.body.cost,
    description:req.body.description,
  })

  try {
    const toSave = await data.save()
    res.status(200).json(toSave)
  } catch (error) {
    res.status(400).json({message:error.message});
  }
}

async function readAllReviews(req,res){
  try {
    const data = await Model.find({restaurantName:req.params.restaurantName})
    res.json(data)
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}


async function readReview(req,res){
    try{
      const data = await Model.findOne({restaurantName: req.params.restaurantName});
      res.json(data)
    }
    catch(error){
      res.status(500).json({message: error.message})
    }
}

async function updateReview(req,res){
  try {
    const id = req.params.id;
    const update = req.body
    const options = {new:true}

    const result = await Model.findByIdAndUpdate(id,update,options)

    res.send(result)
    
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

async function deleteReview(req,res){
  try {
    const id = req.params.id;
    const result = await Model.findByIdAndDelete(id)
    res.send(result)
    
  } catch (error) {
    
  }

}

  
module.exports = {createReview,updateReview,deleteReview,readReview,readAllReviews}

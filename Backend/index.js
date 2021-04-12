const express = require("express");
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv = require("dotenv");
const app=express();
const port = process.env.PORT || 9999;

dotenv.config();
app.use(cors());
app.use(express.json());


// MongoDb 
let conn;
const connectDB = async () => {
  try {
     conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }); 

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};
connectDB();
const detailSchema=new mongoose.Schema({
  img:String,
  title:String,
  description:String,
  inventory:String,
  price:String,
  deal:String,
  id:String,
  manufacturer:String,
  userId: mongoose.Schema.Types.ObjectId
})

const detailModel=mongoose.model("detail",detailSchema);

// Register
const LoginSchema=new mongoose.Schema({
  name:String,
  email:String,
  password:String,
})

const LoginModel=mongoose.model("login",LoginSchema);



// EndPoint
const checkCondition=(title)=>{
  if(title!==null || title!==undefined)
  return true
}

//signup
app.post('/signup',async (req,res)=>{
  const {name,email,password} = req.body;
  console.log(name,email,password);
    const newServices=new LoginModel({name:name,email:email,password:password});
  newServices.save();
    res.status(200).send("success");
  
})

app.post('/login',async(req,res)=>{
  const {email,password}=req.body;
  const validate= await LoginModel.find({email:email,password:password});
  console.log(email,password)
   if(validate.length===1){
    res.status(200).send("success")
   }
   else{
     res.status(400).send("user id and password incorrect")
   }
  
})

app.post('/add',async (req,res)=>{
    const {img,title,description,inventory,price,deal,id,manufacturer} = req.body;
    console.log(img,title,description,inventory,price,deal,id,manufacturer);
      const newServices=new detailModel({img:img,title:title,description:description,inventory:inventory,price:price,deal:deal,id:id,manufacturer:manufacturer});
    newServices.save();
      res.status(200).send("success");
    
})
app.get('/',async (req,res)=>{
  const getServices= await detailModel.find({});
  console.log(getServices)
  res.send(getServices);
})

detailSchema.method("toJSON",function()
{
  const{ _v, _id, ...object}=this.toObject();
  object.id=_id;
  return object;
  
});
 
app.delete("/delete/:_id",  async (req, res) => {
  const idDel = req.params._id;
 // console.log(req.params.id)
  try {
    await detailModel.deleteOne({ _id: idDel });
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(404);
  }
});



app.listen(
    port,
    console.log(`Server begins in ${port} in ${process.env.MODE}`)
  );
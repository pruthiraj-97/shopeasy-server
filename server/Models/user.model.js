const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({ 
      username:{
        type:String,
        require:true
      },
      email:{
        type:String,
        require:true
      },
      password:{
        type:String,
        require:true
      },
      contactNumber:{
        type:String,
        require:true
      },
      shop:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Shop'
      },
      type:{
        type:String,
        enum:['user','admin','owner'],
        default:'user'
      },
      orderHistory:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Order'
       }
      ],
    pincode:{
      type:Number,
      require:true
    },
    state: {
      type: String,
      trim: true,
      lowercase: true,
      required: true
  },
  city:{
    type: String,
    trim: true,
    lowercase: true,
    required: true
  },
  mycart:[
    {
      product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
      },
      quantity:{
        type:Number,
        require:true
      }
    }
  ]
 },
 {timestamps:true})

module.exports=mongoose.model('User',userSchema)
const mongoose=require('mongoose')
const ShopSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address'
    },
    products:[
         {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ],
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Order'
        }
    ],
    openingTime:{
        type:String,
        require:true
    },
    closingTime:{
        type:String,
        require:true
    },
    minimumOrder:{
        type:Number,
        require:true
    },
    deliveryCharge:{
        type:Number,
        require:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    location:{
        type:String,
        require:true
    },
    state:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'State',
        require:true
    },
    city:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'City',
        require:true
    },
    pincode:{
        type:Number,
        require:true
    },
    review:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        require:true
    },
    contactNumber:{
        type:Number,
        require:true
    }
},{timestamps:true})

module.exports=mongoose.model('Shop',ShopSchema)
const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "id" :String,
        "title" :String,
        "description" :String,
        "Category" :String,
        "image" :String,
        "rating" :String,
        "noofstocks" :String
    }
)
let productmodel = mongoose.model("products",schema);
module.exports={productmodel}
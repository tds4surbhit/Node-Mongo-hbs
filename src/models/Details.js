const moongose = require("mongoose")
const Detail = moongose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[{
        label:String,
        url:String
    }],
})

module.exports=moongose.model("detail",Detail);
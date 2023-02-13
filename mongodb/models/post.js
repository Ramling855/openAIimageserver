import mongoose, { Schema } from "mongoose";
const post = new mongoose.Schema({
    name:{type:String,require:true},
    prompt:{type:String,require:true},
    photot:{type:String,require:true},
})
const PostSchema= mongoose.model("post",post)
export default PostSchema;
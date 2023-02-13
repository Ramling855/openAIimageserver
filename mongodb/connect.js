import mongoose from "mongoose";
const connectDB=(url)=>{
mongoose.set("strictQuery",true)
mongoose.connect(url).then((res)=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log(err);
})
}
export default connectDB;
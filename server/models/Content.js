import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    headerTitle:String,
    title1: String,
    title2: String,
    leftcnt: String,
    rightcnt: String,
    aboutTitle :String,
    aboutDesc: String,
    serviceTitle : String,
    services:[
        {
            name:String,
            desc:String
        }
    ],

    featureTitle: String,
    featureData_1:[
        {
            name:String
        }
    ],
    featureData_2:[
        {
            name:String
        }
    ],
    featureUrl: String,
    //Footer
    footerTitle:String,
    footerDesc:String,
});
export default mongoose.model("Content", contentSchema);
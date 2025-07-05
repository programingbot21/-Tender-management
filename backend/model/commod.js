import mongoose  from "mongoose";

const CompanySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    industry:{
        type: String,
        required: true,
        
    },
    description:{
        type: String,
        required: true,
    },
    logoUrl: {
        type: String,
        required: true
    },}, {
        timestamps: true,
    }
)
const Company = mongoose.model("Company", CompanySchema);
export default Company;
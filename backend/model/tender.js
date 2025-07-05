import mongoose from 'mongoose';

const tenderSchema = new mongoose.Schema({
    companyId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'company', required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

   deadline :{
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['open', 'closed', 'in-progress'],
        default: 'open',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    budget:{
        type: Number,
        required: true
    }
   },{timestamps: true}
);


const Tender = mongoose.model('Tender', tenderSchema);
export default Tender;
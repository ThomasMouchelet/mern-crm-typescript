import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    amount: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    }
});

export default mongoose.model("Invoice", invoiceSchema);

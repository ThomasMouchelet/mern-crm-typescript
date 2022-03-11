import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    email: {
        type: String,
    },
    invoices: [
        {type: mongoose.Schema.Types.ObjectId,ref:'Invoice'}
    ]
});

export default mongoose.model("Customer", customerSchema);
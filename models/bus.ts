import './dbConnection';
import { model, Schema, Model, Document } from 'mongoose';
// station schema

interface IBus extends Document {
    busName: string;
    maxCapacity: Number;
    currentCapacity: Number;
    source: String;
    destination: String;
    totalTime: String;
}

const BusSchema: Schema = new Schema({
    busName: { type: String },
    maxCapacity: {
        type: Number,
        validator: Number.isInteger,
    },
    currentCapacity: {
        type: Number,
        validator: Number.isInteger,
    },
    source: { type: String },
    destination: { type: String },
    totalTime : {type : String }
});

const Bus: Model<IBus> = model('Bus', BusSchema);

export { Bus, IBus };
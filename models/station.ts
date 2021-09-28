import './dbConnection';
import { model, Schema, Model, Document } from 'mongoose';
// station schema

interface IStation extends Document {
    name: string;
    peopleCount: string;
}

const StationSchema: Schema = new Schema({
    name: { type: String, required: false },
    peopleCount: {
        type: Number,
        validator: Number.isInteger,
    },
});

const Station: Model<IStation> = model('Station', StationSchema);

export { Station, IStation };
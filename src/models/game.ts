import { Schema, model } from 'mongoose'
import { Game } from '../interfaces/game.interface'

const GameSchema = new Schema<Game>(
{
    image: {type: String},
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    machine: {type: String, enum: ['PS4', 'SWITCH', 'XBOXONE'], required: true},
    type: {type: String, required: true},
    year: {type: Number, required: true}
},
{
    timestamps:true,
    versionKey:false,
});

const gameModel = model('games', GameSchema);
export default gameModel;
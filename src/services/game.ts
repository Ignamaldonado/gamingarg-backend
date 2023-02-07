 import { Game } from "../interfaces/game.interface";
 import gameModel from "../models/game";

 const insertGame = async (game: Game) => {
    const responseInsert = await gameModel.create(game);
    return responseInsert;
 }

 const getGames = async () => {
   const responseGet = await gameModel.find({});
   return responseGet
 }

 const getGame = async (id:string) => {
   const responseGet = await gameModel.findOne({_id:id});
   return responseGet
 }

 const putGame = async (id:string, data: Game) => {
  const responsePut = await gameModel.findOneAndUpdate(
    {_id: id},
    data,
    {new:true}
  )
  return responsePut
 }

 const deleteGame = async (id:string) => {
  const responseDelete = await gameModel.remove({_id:id});
  return responseDelete
 }

 export { insertGame, getGames, getGame, putGame, deleteGame }
 import { Game } from "../interfaces/game.interface";
 import gameModel from "../models/game";
 import aws from '../utils/aws.handler';
 import { FileImage } from "../interfaces/file.interface";

 const insertGame = async (game: Game) => {
    return await gameModel.create(game)
 }

 const insertImage = async (file: any) => {
  const key = Object.keys(file)[0];
  const name = file[key].name;
  const data = file[key].data;
  return await aws.uploadFile(name, data);
 }

 const getGames = async () => {
   const responseGet = await gameModel.find({});
   if (responseGet.length === 0) return 'NO_GAMES_FOUND'; 
   return responseGet;
 }

 const getGame = async (id:string) => {
   const responseGet = await gameModel.findOne({_id:id});
   if (!responseGet) return 'GAME_NOT_FOUND';
   return responseGet;
 }

 const putGame = async (id:string, data: Game) => {
  const responseGet = await gameModel.findOne({_id:id});
  if (!responseGet) return 'GAME_NOT_FOUND';
  const responsePut = await gameModel.findOneAndUpdate(
    {_id: id},
    data,
    {new:true}
  );
  return responsePut;
 }

 const deleteGame = async (id:string) => {
  const responseGet = await gameModel.findOne({_id:id});
  if (!responseGet) return 'GAME_NOT_FOUND';
  const responseDelete = await gameModel.remove({_id:id});
  return responseDelete;
 }

 export { insertGame, getGames, getGame, putGame, deleteGame, insertImage };
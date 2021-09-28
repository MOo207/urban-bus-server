import express from "express";
import { IStation, Station } from "../models/station";
var router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    Station.remove({}, function(data: any){ console.log("All deleted!");});
    Station.find({}, function(err: any, stations: any){
        if(err){
          console.log(err);
        } else{
            console.log(stations)
            res.render("index", {stations: stations})
        }
    
});
}
)


router.post('/pickPeople', async (req: express.Request, res: express.Response) => {
    console.log(req.body);
   const newStation: IStation = await Station.create({
    name: req.body.name,
    peopleCount: req.body.peopleCount
   });
   res.json({requestBody: newStation})  
})

router.get('/getData', async (req: express.Request, res: express.Response) => {
    Station.find({}, 'name', function(err: any, stations: string | any[]){
        if(err){
          console.log(err);
        } else{
            res.json(stations);
        } 
    })
})

export default router;
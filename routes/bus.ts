import express from "express";
import { IBus, Bus } from "../models/bus";
var router = express.Router();

router.post('/pick', async (req: express.Request, res: express.Response) => {
    console.log(req.body);
    var busIfExist = await Bus.find({
        busName: req.body.busName
    });
    if (busIfExist.length == 0) {
        const newBus: IBus = await Bus.create({
            busName: req.body.busName,
            maxCapacity: req.body.maxCapacity,
            currentCapacity: req.body.currentCapacity,
            source: req.body.source,
            destination: req.body.destination,
            totalTime: req.body.totalTime
        });
    } else {
        await busIfExist[0].updateOne({
            $set: {
                currentCapacity: req.body.currentCapacity,
                source: req.body.source,
                destination: req.body.destination,
                totalTime: req.body.totalTime
            }
        });
    }
    res.json({ requestBody: busIfExist })
});

router.get('/', (req: express.Request, res: express.Response) => {
    Bus.remove({}, function (data: any) { console.log("All deleted!"); });
    Bus.find({}, function (err: any, buses: any) {
        if (err) {
            console.log(err);
        } else {
            console.log(buses)
            res.render("bus", { buses:  buses })
        }

    });
}
)

router.get('/getBuses', async (req: express.Request, res: express.Response) => {
    Bus.find({}, function (err: any, buses: string | any[]) {
        if (err) {
            console.log(err);
        } else {
            console.log(buses);
            res.json(buses);
        }
    })
})

export default router;
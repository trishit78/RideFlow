import { updateLocationService } from "../services/driver.service.js";



export async function updateLocationHandler(req,res) {
    const {lat,long} = req.body;
    
    if(typeof lat !== 'number' || typeof long !== 'number'){
        throw new Error('Lat and long should be in number');
    }
if (!req.user?._id) {
  return res.status(401).json({ success: false, message: "Unauthorized" });
}
updateLocationService({passengerId: req.user?._id.toString(), long, lat});


    res.status(201).json({
        success:true,
        error:null,
        message:'Successfully fetched drivers locations'
    })
}
import locationService from "../services/location.service";

export default function initSocket(io){
    io.on('connection',(socket)=>{
        console.log(`New socket connected: ${socket.id}`);

        socket.on('registerDriver',async({driverId})=>{
            if(!driverId) return ;
            await locationService.setDriverSocket(driverId,socket.id);
            console.log(`Registered driver ${driverId} with socket ${socket.id}`);
        })

        socket.on('disconnect',async ()=>{
            const driverId = await locationService.deleteBySocket(socket.id);
            console.log(`Socket ${socket.id} disconnected ${driverId}`);
        })
    })
}


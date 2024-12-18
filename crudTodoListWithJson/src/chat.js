export function createConnection(serverUrl,roomId){
    // in real implementation would actually connect to the server.
    const connect= ()=>{
        console.log(`connecting to ${roomId} room at ${serverUrl} ...`)
    }

    const disconnect=()=>{
        console.log(`disconnect ${roomId} room at ${serverUrl}`);
    }

    return{
        connect,
        disconnect
    }
}
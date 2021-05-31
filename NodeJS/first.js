const webSocket = require('ws')
const PORT  = 3000
const wsServer = new webSocket.Server({
   port: PORT
})

wsServer.on('connection',function(socket) {
   console.log("new Client join")

   socket.on('message',function(message) {
      console.log("you received message is "+ message)
      socket.send('msg naa karto pacho')
   })

 
})



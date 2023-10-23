
//1 importing json server
const jsonserver=require('json-server')



//2 creating server
const server=jsonserver.create()

//setting up router
const router=jsonserver.router('db.json')

//setting up middleware
const middleawre=jsonserver.defaults()

//using middleware and router in server
server.use(middleawre)
server.use(router)


//declaring port
const PORT=process.env.port||3002

//staring server
server.listen(PORT,()=>{
    console.log('Doctor server started')
})



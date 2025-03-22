import fastify from "fastify"
import { userRouter } from "./routes/userRoute.ts"

const app = fastify({
    logger:true
})

app.register(userRouter)

app.listen({port:3000},()=>{
    console.log('Server listening')
})
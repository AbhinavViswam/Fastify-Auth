import { FastifyReply, FastifyRequest } from "fastify";

type loginBody={
    email:string,
    password:string
}

export const userLogin = (request:FastifyRequest<{Body:loginBody}>,reply:FastifyReply) =>{
    const {email,password} = request.body
    console.log(email,password)
}
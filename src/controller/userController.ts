import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

type loginBody={
    email:string,
    password:string
}

export const userLogin =async (request:FastifyRequest<{Body:loginBody}>,reply:FastifyReply) =>{
    const {email,password} = request.body
    const User = await Prisma.user.findUnique({
        where:{email}
    })
    if(!User){
        return reply.send({e:"No user found"})
    }


}

export const userCreate = async(request:FastifyRequest,reply:FastifyReply) => {
    
}
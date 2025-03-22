import { FastifyInstance } from "fastify";
import { userLogin } from "../controller/userController.ts";

//schemas

const loginSchema = {
    body:{
        type:'object',
        required:['email','password'],
        properties:{
            email:{
                type:'string'
            },
            password:{
                type:'string'
            }
        }
    }
}

export const userRouter = async(fastify:FastifyInstance) => {
    fastify.post("/login",{schema:loginSchema},userLogin)
}
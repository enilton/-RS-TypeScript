import { Request, Response } from 'express';
import createUser from './services/CreateUserService'; 

export function helloWorld(request: Request, response:Response) {
    const user = createUser({
        email:'enilton@email.com',
        password: '123456',
        techs: ['Node','React','React Native',
        {
            title: 'exp', experience: 100
        },
        {
            title: 'tech 4', experience: 50
        }],

    });
    return response.json({ message: 'olá '});
}
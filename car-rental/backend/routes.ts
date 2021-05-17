import {Router} from 'express';
import { StatusController } from './src/controller/status.controller';
import { CarController } from './src/controller/car.controller';
import { UserController } from './src/controller/user.controller';

export function getRouter(){
    const router = Router();

    const userController = new UserController();
    const carController = new CarController();
    const statusController = new StatusController();

    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', userController.update);
    router.delete('/users/:id', userController.delete);

    router.get('/cars', carController.getAll);
    router.get('/cars/:id', carController.getOne);
    router.post('/cars', carController.create);
    router.put('/cars', carController.update);
    router.delete('/cars/:id', carController.delete);

    router.get('/condition', statusController.getAll);
    router.get('/condition/:id', statusController.getOne);
    router.post('/condition', statusController.create);
    router.put('/condition', statusController.update);
    router.delete('/condition/:id', statusController.delete);
    return router;

}
import { request } from "http";
import { getRepository } from "typeorm";
import { Car } from "../entity/Car";
import { Controller } from "./controller";

export class CarController extends Controller{
    repository = getRepository(Car);

    getAll = async (req,res) => {
        const search = req.query.search || '';
        const search2 = req.query.search2 || '';

        try {
            const entities = await this.repository
            .createQueryBuilder('car')
            .where("car.type LIKE CONCAT('%', :search, '%')" , {search: search})
            .andWhere("car.license LIKE CONCAT('%', :search2, '%')" , {search2:search2})
            .leftJoinAndSelect('car.rentedby', 'rentedby')
            .leftJoinAndSelect('car.condition', 'status')
            .getMany();
            res.json(entities);
        }catch(err){
            console.error(err);
            this.handleError(res);
        }
    }

    delete = async (req, res) => {
        try{
            const id = req.params.id;
            const entity = await this.repository
            .createQueryBuilder()
            .delete()
            .from(Car)
            .where("id = :id", { id:id })
            .execute();
            res.json({success: true});
        }catch(err){
            console.error(err);
            this.handleError(res);
        }
    }
}
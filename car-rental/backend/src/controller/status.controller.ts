import { getRepository } from "typeorm";
import { Status } from "../entity/Status";
import { Controller } from "./controller";

export class StatusController extends Controller{
    repository = getRepository(Status);
}
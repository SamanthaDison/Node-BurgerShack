import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getById)
            .post('', this.create)
    }

    async getAll(req, res, next) {
        try {
            const burgers = await burgersService.getAll()
            return res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const burger = await burgersService.getById(req.params.id)
            return res.send(burger)
        } catch (error) {
            next(error)
        }
    }


}
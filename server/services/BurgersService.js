import { FakeDb } from "../db/FakeDB"

class BurgersService {

    async getAll() {
        return FakeDb.burgers
    }

    async getById(id) {
        const burger = await FakeDb.burgers.find(burger => burger.id == id)
        if (!burger) {
            throw new BadRequest('Invalid Id')
        }
        return burger
    }
}
export const burgersService = new BurgersService()
import { generateId } from "../../client/app/Utils/generateId.JS";

export const FakeDb = {
    values: ['value 1', 'value 2'],
    burgers: [{ id: generateId(), name: 'Mushroom Swiss' }, { id: generateId(), name: 'Southwest Bacon' }]
}
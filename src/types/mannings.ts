import Joi from "joi"
import { jobValidator } from "./jobs"
import { unitIdValidator } from "./units"
import { Validator } from "./validators"

export interface Manning {
    manningId: number,
    unitId: number,
    job: string,
    option: string,
    name: string
}

export const manningIdValidator: Validator = {
    schema: Joi.number().positive().integer(),
    errorMessage: "manningId`s type is not a valid string",
}

export const manningValidator: Validator = {
    schema: Joi.object().keys({
        unitId: unitIdValidator.schema.required(),
        job: jobValidator.schema.required(),
        option: Joi.string(),
        name: Joi.string(),
    }).or("name", "option"),
}
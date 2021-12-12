import Joi from "joi";
import { Validator } from "./validators";

interface unit{
    id : number,
    name: string
}

export const unitIdValidator: Validator = {
    schema: Joi.number().positive().integer(),
    errorMessage: "unitId`s type is not a valid integer",
}
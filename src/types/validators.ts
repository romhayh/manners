import Joi from 'joi';

export interface Validator {
    schema: Joi.Schema,
    errorMessage?: string
};

export const unitIdValidator: Validator = {
    schema: Joi.number().positive().integer(),
    errorMessage: "unitId`s type is not a valid integer",
}

export const jobValidator: Validator = {
    schema: Joi.string(),
    errorMessage: "job`s type is not a valid string",
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
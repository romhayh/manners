import Joi from 'joi';

export interface Validator {
    schema: Joi.Schema,
    errorMessage?: string
};






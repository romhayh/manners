import Joi from 'joi';
import {Validator} from './validators';

export interface Job {
    id : number,
    name : string
}

export const jobValidator: Validator = {
    schema: Joi.string(),
    errorMessage: "job`s type is not a valid string",
}
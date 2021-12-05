import express from 'express';
import { logger } from '../../logger';
import bodyParser from 'body-parser';
import Joi from 'joi';

export const router = express.Router();

interface Validator {
    schema: Joi.Schema,
    errorMessage?: string
};

const unitIdValidator: Validator = {
    schema: Joi.number().positive().integer(),
    errorMessage: "unitId`s type is not a valid integer",
}

const jobValidator: Validator = {
    schema: Joi.string().regex(/^[a-zA-Z]+$/),
    errorMessage: "job`s type is not a valid string",
}

const manningIdValidator: Validator = {
    schema: Joi.number().positive().integer(),
    errorMessage: "manningId`s type is not a valid string",
}

const manningValidator: Validator = {
    schema: Joi.object().keys({
        unitId : unitIdValidator.schema.required(),
        job : jobValidator.schema.required(),
        name : Joi.string().regex(/^[a-zA-Z]+$/),
        role : Joi.string().regex(/^[a-zA-Z]+$/),
    }).or("name", "role"),
}
router.get("/units/:unitId", (req, res) => {
    logger.info(`/mannings/units/${req.params.unitId} GET request`);
    try {
        Joi.assert(req.params.unitId, unitIdValidator.schema, unitIdValidator.errorMessage + ',');
        res.send(req.params.unitId);
        logger.info(`sent all mannings of the ${req.params.unitId} unit`);
    } catch (err) {
        logger.error(err);
        throw err;
    }
});

router.get("/:job/units/:unitId", (req, res) => {
    logger.info(`/mannings/${req.params.job}/units/${req.params.unitId} GET request`);
    try {
        Joi.assert(req.params.job, jobValidator.schema, jobValidator.errorMessage + ',');
        Joi.assert(req.params.unitId, unitIdValidator.schema, unitIdValidator.errorMessage + ',');
        res.send({ unitId: req.params.unitId, job: req.params.job });
        logger.info(`sent the manning of the ${req.params.job} job for the ${req.params.unitId} unit`);
    } catch (err) {
        logger.error(err);
        throw err;
    }
});

router.put("/:manningId", bodyParser.json(), (req, res) => {
    logger.info(`/mannings/${req.params.manningId} PUT request`);
    try {
        Joi.assert(req.params.manningId, manningIdValidator.schema);
        Joi.assert(req.body, manningValidator.schema);
        logger.info(`request's body is : ${req.body}`);
        res.send(req.params.manningId);

    } catch(err){
        logger.error(err);
        throw err;
    }
})

import express from 'express';
import { logger } from '../../logger';
import Joi from 'joi';
import fs from 'fs';

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
    schema: Joi.string(),
    errorMessage: "job`s type is not a valid string",
}

const manningIdValidator: Validator = {
    schema: Joi.number().positive().integer(),
    errorMessage: "manningId`s type is not a valid string",
}



const manningValidator: Validator = {
    schema: Joi.object().keys({
        unitId: unitIdValidator.schema.required(),
        job: jobValidator.schema.required(),
        role: Joi.string(),
        name: Joi.string(),
    }).or("name", "role"),
}

interface Manning {
    manningId: number,
    unitId: number,
    job: string,
    role: string,
    name: string
}

const data: Manning[] = JSON.parse(fs.readFileSync('db/mannings.json', 'utf8'));


// change to query param
router.get("", (req, res) => {
    const unvalidatedUnitId = req.query.unitId;

    logger.info(`/mannings/units/${unvalidatedUnitId} GET request`);
    try {
        Joi.assert(unvalidatedUnitId, unitIdValidator.schema, unitIdValidator.errorMessage + ',');
        const unitId = +<string>unvalidatedUnitId;
        const mannings: Manning[] | undefined = data.filter(manning => manning.unitId === unitId);

        if (mannings.length === 0) {
            logger.warn(`a manning with "manningId" of ${unitId} was not found. sending null`);
            res.send(null);
        } else {
            res.send(mannings);
            logger.info(`sent:\n${JSON.stringify(mannings, null, 2)}`);
        }
    } catch (err) {
        logger.error(err);
        throw err;
    }
});

router.get("", (req, res) => {
    const unvalidatedUnitId = req.query.unitId;
    const unvalidatedJob = req.query.job;
    logger.info(`/mannings?job=${unvalidatedJob}&unitId=${unvalidatedUnitId} GET request`);
    try {
        Joi.assert(unvalidatedJob, jobValidator.schema, jobValidator.errorMessage + ',');
        Joi.assert(unvalidatedUnitId, unitIdValidator.schema, unitIdValidator.errorMessage + ',');
        const unitId = +<string>unvalidatedUnitId;
        const job = <string>unvalidatedJob;
        const mannings: Manning[] | undefined = data.filter(m => m.unitId === unitId && m.job === job);

        if (mannings.length === 0) {
            logger.warn(`a manning with "unitId" of ${unitId} and with the job of ${job} was not found. sending null`);
            res.send(null);
        }
        else {
            res.send(mannings);
            logger.info(`sent the manning of the ${job} job for the ${unitId} unit`);
        }

    } catch (err) {
        logger.error(err);
        throw err;
    }
});

router.put("/:manningId", (req, res) => {
    logger.info(`/mannings/${req.params.manningId} PUT request`);
    try {
        Joi.assert(req.params.manningId, manningIdValidator.schema);
        Joi.assert(req.body, manningValidator.schema);
        logger.info(`request's body is : ${req.body}`);
        let manning: Manning | undefined = data.find(m => m.unitId === +req.params.manningId);
        if (!manning) {
            logger.info("no such manning was found, creating a new one");
            manning = req.body;
            (<Manning>manning).manningId = +req.params.manningId;
            data.push(<Manning>manning);
        } else {
            const manningIndex: number = data.indexOf(manning);
            data.splice(manningIndex)
            const newManning: Manning = req.body;
            newManning.manningId = + req.params.manningId;
            data.push(newManning);

        }
        fs.writeFile('db/mannings.json', JSON.stringify(data, null, 2), 'utf-8', () => { });
        res.send(req.params.manningId);

    } catch (err) {
        logger.error(err);
        throw err;
    }
})

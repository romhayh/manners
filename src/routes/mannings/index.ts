import express from 'express';
import Joi from 'joi';
import fs from 'fs';

import { logger } from '../../logger';
import { Manning, manningIdValidator, manningValidator } from '../../types/mannings';
import { jobValidator } from '../../types/jobs';
import { unitIdValidator } from '../../types/units';


export const router = express.Router();

const data: Manning[] = JSON.parse(fs.readFileSync('db/mannings.json', 'utf8'));

router.get("", (req, res) => {
    const unvalidatedUnitId = req.query.unitId;
    const unvalidatedJob = req.query.job;
    logger.info(`/mannings?job=${unvalidatedJob}&unitId=${unvalidatedUnitId} GET request`);
    try {
        Joi.assert(unvalidatedJob, jobValidator.schema, jobValidator.errorMessage + ',');
        Joi.assert(unvalidatedUnitId, unitIdValidator.schema, unitIdValidator.errorMessage + ',');
        const unitId = +<string>unvalidatedUnitId;

        const job = <string>unvalidatedJob;
        const mannings: Manning[] = data.filter(manning => {
            if (!unvalidatedJob){
                return manning.unitId === unitId;
            }
            return manning.unitId === unitId && manning.job === job;
        }) || [];

        if (mannings.length === 0) {
            logger.warn(`a manning with "unitId" of ${unitId} and with the job of ${job} was not found. sending []`);
            res.send([]);
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

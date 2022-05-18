import express from 'express';
import {Athlete} from '../models/Athlete';

export const deleteRouter = express.Router();

/**
 * Delete a specific athlete.
 */
deleteRouter.delete('/athlete', async (req, res) => {
  if (!req.query.nif) {
    res.status(400).send({
      error: 'A NIF must be provided',
    });
  }
  try {
    // eslint-disable-next-line max-len
    const athlete = await Athlete.findOneAndDelete(req.query.nif?{nif: req.query.nif.toString()}:{});
    if (!athlete) {
      return res.status(404).send();
    }
    return res.send(athlete);
  } catch (error) {
    return res.status(400).send();
  }
});

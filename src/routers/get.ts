import express from 'express';
import {Athlete} from '../models/Athlete';

export const getRouter = express.Router();

/**
 * Get the athlete by name.
 */
getRouter.get('/athlete', async (req, res) => {
  const filter = req.query.nif?{nif: req.query.nif.toString()}:{};

  try {
    const athlete = await Athlete.find(filter);
    if (athlete.length !== 0) {
      res.status(200).send(athlete);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

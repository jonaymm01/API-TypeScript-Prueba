import express from 'express';
import {Athlete} from '../models/Athlete';

export const postRouter = express.Router();

/**
 * Post all athlete.
 */
postRouter.post('/athlete', async (req, res) => {
  const athlete = new Athlete(req.body);

  try {
    await athlete.save();
    res.status(201).send(athlete);
  } catch (error) {
    res.status(400).send(error);
  }
});

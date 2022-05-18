import express from 'express';
import {Athlete} from '../models/Athlete';

export const patchRouter = express.Router();

/**
 * Update a athlete.
 */
patchRouter.patch('/athlete', async (req, res) => {
  if (!req.query.nif) {
    return res.status(400).send({
      error: 'A name must be provided',
    });
  }
  // eslint-disable-next-line max-len
  const allowedUpdates = ['name', 'surname', 'nif', 'sport', 'masters', 'record'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    // eslint-disable-next-line max-len
    const athlete = await Athlete.findOneAndUpdate({nif: req.query.nif.toString()}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!athlete) {
      return res.status(404).send();
    }

    return res.send(athlete);
  } catch (error) {
    return res.status(400).send(error);
  }
});

import {Document, Schema, model} from 'mongoose';

/**
 * @interface AthleteInterface Implements an Athlete.
 * @extends Document
 */
interface AthleteInterface extends Document {
  name: string,
  surname: string,
  nif: string,
  age: number,
  sport: string,
  masters: string,
  record: number,
}

/**
 * @const AthleteSchema Athlete's schema
 */
const AthleteSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        // eslint-disable-next-line max-len
        throw new Error('Los nombres de los atletas deben empezar en mayúscula');
      }
    },
  },
  surname: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        // eslint-disable-next-line max-len
        throw new Error('Los apellidos de los atletas deben empezar en mayúscula');
      }
    },
  },
  nif: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (value.length != 9) {
        // eslint-disable-next-line max-len
        throw new Error('El nif debe tener 9 caracteres');
      }
    },
  },
  age: {
    type: Number,
    required: true,
    validate: (value: number) => {
      if ((value > 18) && (value < 80)) {
        throw new Error('Los deportistas solo tienen entre 18 y 80 años');
      }
    },
  },
  sport: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        // eslint-disable-next-line max-len
        throw new Error('El deporte debe empezar por mayúscula');
      }
    },
  },
  masters: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        // eslint-disable-next-line max-len
        throw new Error('El nombre de la prueba debe empezar por mayúscula');
      }
    },
  },
  record: {
    type: Number,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Debe ser un número positivo');
      }
    },
  },
});

/**
 * @const Athlete
 */
export const Athlete = model<AthleteInterface>('Athlete', AthleteSchema);

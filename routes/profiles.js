import express from 'express';
import { Profile } from '../models/profile.js';

const router = express.Router();

router.get('/', (_, res) => {
  // much like Sequelize/SQLAlchemy, mongoose has a .find() method
  // to query a database; you can find all available model methods in
  // mongoose docs
  Profile.find()
    .then((profiles) => res.json(profiles))
    .catch((err) => res.status(404));
});

router.patch('/', (req, res) => {
  res.json('patch works');
});

router.post('/', (req, res) => {
  res.json('post works');
});

router.delete('/:profileId', (req, res) => {
  res.json(`Profile ${req.params.profileId} was deleted`);
});

// this file will need to be imported into index.js
export const profiles = router;

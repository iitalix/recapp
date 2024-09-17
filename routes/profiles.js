import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
  res.json('get works');
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

export const profiles = router;

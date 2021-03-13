import { Router } from 'express';

const router = Router();

router.get('/home', (req, res) => {
  res.render('index');
});

export default router;

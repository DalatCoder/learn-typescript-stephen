import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form action="/login" method="POST">
      <div>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" autocomplete="off">
      </div>
      <div>
        <label for="password">Password</label>
        <input name="password" type="password" id="password">
      </div>
      <button>Submit</button>
    </form>
    `);
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.send(email + password);
});

export { router };

import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: RequestWithBody, res: Response) => {
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

router.post('/login', (req: RequestWithBody, res: Response) => {
  const email = req.body.email;

  if (email) {
    res.send(email.toUpperCase());
  } else {
    res.send('You must provide an email');
  }
});

export { router };

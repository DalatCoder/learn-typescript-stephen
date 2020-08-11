import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

function requireAuth(
  req: RequestWithBody,
  res: Response,
  next: NextFunction
): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('You are not allowed to access');
}

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
  const { email, password } = req.body;

  if (email && password && email === 'hi@hi.com' && password === 'hieuha') {
    req.session = { loggedIn: true };

    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: RequestWithBody, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
  }
});

router.get('/logout', (req: RequestWithBody, res: Response) => {
  req.session = null;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: RequestWithBody, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});

export { router };

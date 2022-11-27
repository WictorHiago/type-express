import { Router, Request, Response } from 'express';
import User from '../class/User';

let database: User[] = [];
const router = Router();

router.post('/api/user', async (req: Request, res: Response) => {
    const name: string = req.body.name;
    const email: string = req.body.email;
    const password: string = req.body.password;

    if (!name) {
        res.status(401).json({ 401: 'unauthorized.' });
        return;
    }
    if (!email) {
        res.status(401).json({ 401: 'unauthorized' });
        return;
    }
    if (!password) {
        res.status(401).json({ 401: 'unauthorized' });
        return;
    }
    const user = new User(name, email, password);
    database.push(user);

    console.log(database);
    console.log('_______________________________________________________________');

    res.status(201).json({ 201: 'user created' });
});

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'welcome to server Express' });
});

export default router;

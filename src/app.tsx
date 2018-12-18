import * as Express from 'express';
import * as faker from 'faker'
const app = Express();

app.get(
    '/',
    (req: Express.Request, res: Express.Response) => {
        return res.send(faker.name.findName());
    });

app.listen(
    3000,
    () => {
        console.log('Example app listening on port 3000!');
    });

export default app;

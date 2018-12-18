import * as Express from 'express'
import { randomResponse } from './random-response'
const app = Express();

app.get('/', randomResponse );

app.listen(
    3000,
    () => {
        console.log('Example app listening on port 3000!');
    });

export default app;

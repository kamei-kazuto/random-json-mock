import * as Express from 'express';
import * as faker from 'faker'

export const randomResponse = (req: Express.Request, res: Express.Response) => {
  return res.send(faker.name.findName());
}

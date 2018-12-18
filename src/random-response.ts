import * as Express from 'express';
import * as faker from 'faker'

export const randomResponse = (req: Express.Request, res: Express.Response) => {
  const response = randomJson(req.query)
  res.send(response)
};

const randomJson = (query: {[key: string]: string}): object => {
  console.log(query)
  return Object.keys(query).map( (key, index) => {
   return {
      [key]: fakerValue(query[key])
    }
  }).reduce((o1: object, o2: object) => ({...o1, ...o2 }))
}

const fakerValue = ( type: string ): any  => {
  switch (type) {
    default:
      return faker.name.title()
  }
}

import * as Express from 'express';
import * as faker from 'faker'

export const randomResponse = (req: Express.Request, res: Express.Response) => {
  const response = randomJson(req.query)
  res.send(response)
};

const generateRandomObj = (types: {[key: string]: string}) => {
  return Object.keys(types).map( (key, index) => {
    return {
       [key]: fakerValue(types[key])
     }
   }).reduce((o1: object, o2: object) => ({...o1, ...o2 }))
}

const randomJson = (query: {[key: string]: string}): object => {
  const number: number = Number(query.number)
  delete query.number

  return number ? Array.from({length: number}, () => generateRandomObj(query) ) : generateRandomObj(query)

}

const fakerValue = ( type: string ): any  => {
  switch (type) {
    case 'id':
    return faker.random.uuid()
    case 'name':
      return faker.name.findName()
    case 'image':
      return faker.random.image()
    case 'date':
      return faker.date.past()
    case 'tel':
      return faker.phone.phoneNumber()
    case 'text':
      return faker.lorem.text()
    default:
      return 'no config'
  }
}

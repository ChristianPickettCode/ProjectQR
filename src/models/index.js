// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Client, Code, User } = initSchema(schema);

export {
  Client,
  Code,
  User
};
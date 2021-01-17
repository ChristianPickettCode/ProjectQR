import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Client {
  readonly id: string;
  readonly codeID: string;
  readonly Codes?: (Code | null)[];
  readonly name?: string;
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

export declare class Code {
  readonly id: string;
  readonly Clients?: (Client | null)[];
  readonly User?: User;
  readonly clientID: string;
  readonly userID: string;
  constructor(init: ModelInit<Code>);
  static copyOf(source: Code, mutator: (draft: MutableModel<Code>) => MutableModel<Code> | void): Code;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly Codes?: (Code | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}
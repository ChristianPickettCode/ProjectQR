/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      email
      codes {
        id
        name
        createdAt
        content
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      email
      codes {
        id
        name
        createdAt
        content
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      email
      codes {
        id
        name
        createdAt
        content
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCode = /* GraphQL */ `
  subscription OnCreateCode($owner: String!) {
    onCreateCode(owner: $owner) {
      id
      name
      createdAt
      content
      updatedAt
      owner
    }
  }
`;
export const onUpdateCode = /* GraphQL */ `
  subscription OnUpdateCode($owner: String!) {
    onUpdateCode(owner: $owner) {
      id
      name
      createdAt
      content
      updatedAt
      owner
    }
  }
`;
export const onDeleteCode = /* GraphQL */ `
  subscription OnDeleteCode($owner: String!) {
    onDeleteCode(owner: $owner) {
      id
      name
      createdAt
      content
      updatedAt
      owner
    }
  }
`;

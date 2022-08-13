# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type User {
  userId: String!
  email: String!
  age: Int!
  isSubscribed: Boolean
}

type Query {
  user(userId: String!): User
  users(userIds: [String!]!): [User]!
}

type Mutation {
  createUser(createUserInput: CreateUserInput!): User!
  updateUser(updateUserInput: UpdateUserInput!): User!
  deleteUser(deleteUser: DeleteUser!): User!
}

input CreateUserInput {
  email: String!
  age: Float!
}

input UpdateUserInput {
  userId: String!
  age: Float
  isSubscribed: Boolean
}

input DeleteUser {
  userId: String!
}
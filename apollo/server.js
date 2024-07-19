import { v4 } from "uuid";
import { ApolloServer, gql } from "apollo-server-express";
import mongoose from "mongoose";
import Project from "./mongoSchemas.js";
import express from "express"

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      description
      status
      startDate
      endDate
    }
  }
`;

export const GET_DEVS = gql`
  query GetProjects {
    projects {
      tasks {
        assignedTo
      }
    }
  }
`;

export const typeDefs = gql`
  type Task {
    taskId: ID!
    title: String!
    assignedTo: String!
    status: String!
    dueDate: String!
  }

  type Project {
    id: ID!
    name: String!
    description: String!
    status: String!
    startDate: String!
    endDate: String!
    tasks: [Task!]!
  }

  input TaskInput {
    taskId: ID!
    title: String!
    assignedTo: String!
    status: String!
    dueDate: String!
  }

  input ProjectInput {
    name: String!
    description: String!
    status: String!
    startDate: String!
    endDate: String!
    tasks: [TaskInput!]!
  }

  type Mutation {
    createProject(input: ProjectInput!): Project
    updateProjectStatus(id: ID!, status: String!): Project
  }

  type Query {
    project(id: ID!): Project
    projects: [Project]
  }
`;

export const GET_PROJECT_QUERY = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      startDate
      endDate
      tasks {
        taskId
        title
        assignedTo
        status
        dueDate
      }
    }
  }
`;

// Types: These define the shape of the data.
// Queries: These define the operations to read data.
// Mutations: These define the operations to modify data.

// Resolvers are functions that handle the logic for fetching and modifying data in response to GraphQL queries and mutations.
//     Query Resolver: Handles fetching data.
//     Mutation Resolver: Handles modifying data.




export const resolvers = {
  Query: {
    project: async (parent, { id }) => {
      return await Project.findById(id);
    },
    projects: async () => {
      return await Project.find({});
    },
  },
  Mutation: {
    createProject: async (parent, { input }) => {
      const newProject = new Project({ ...input, id: v4() });
      return await newProject.save();
    },
    updateProjectStatus: async (parent, { id, status }) => {
      const project = await Project.findById(id);
      if (!project) throw new Error("Project not found");
      project.status = status;
      return await project.save();
    },
  },
};


async function startServer() {
  const PORT = process.env.PORT || 8000;
  const MONGODB_URI = process.env.MONGODB_URI;
  const app = express();

    mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
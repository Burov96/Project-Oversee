import { gql } from "@apollo/client";

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



export const CREATE_PROJECT_MUTATION = gql`
  mutation CreateProject($input: ProjectInput!) {
    createProject(input: $input) {
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

export const UPDATE_PROJECT_STATUS_MUTATION = gql`
  mutation UpdateProjectStatus($id: ID!, $status: String!) {
    updateProjectStatus(id: $id, status: $status) {
      id
      status
    }
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

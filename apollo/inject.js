import mongoose from 'mongoose';
import Project from './mongoSchemas';

const projects = [
  {
    id: "1",
    name: "Project Alpha",
    description: "A project to develop a new software application.",
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "2024-12-15",
    tasks: [
      {
        taskId: "1",
        title: "Requirement Analysis",
        assignedTo: "John Doe",
        status: "Completed",
        dueDate: "2024-02-15",
      },
      {
        taskId: "2",
        title: "Design",
        assignedTo: "Jane Smith",
        status: "In Progress",
        dueDate: "2024-04-15",
      },
      {
        taskId: "3",
        title: "Implementation",
        assignedTo: "Bob Johnson",
        status: "Pending",
        dueDate: "2024-08-15",
      },
      {
        taskId: "4",
        title: "Testing",
        assignedTo: "Alice Williams",
        status: "Pending",
        dueDate: "2024-10-15",
      },
    ],
  },
  {
    id: "2",
    name: "Project Beta",
    description: "A project to upgrade the company's IT infrastructure.",
    status: "Not Started",
    startDate: "2024-03-01",
    endDate: "2024-09-01",
    tasks: [
      {
        taskId: "1",
        title: "Inventory Assessment",
        assignedTo: "Michael Brown",
        status: "Pending",
        dueDate: "2024-03-15",
      },
      {
        taskId: "2",
        title: "Vendor Selection",
        assignedTo: "Sarah Davis",
        status: "Pending",
        dueDate: "2024-04-15",
      },
      {
        taskId: "3",
        title: "Installation",
        assignedTo: "David Wilson",
        status: "Pending",
        dueDate: "2024-06-15",
      },
      {
        taskId: "4",
        title: "Testing and QA",
        assignedTo: "Emily Martinez",
        status: "Pending",
        dueDate: "2024-08-15",
      },
    ],
  },
  {
    id: "3",
    name: "Project Gamma",
    description: "A project to launch a new marketing campaign.",
    status: "Completed",
    startDate: "2023-05-01",
    endDate: "2023-11-01",
    tasks: [
      {
        taskId: "1",
        title: "Market Research",
        assignedTo: "Chris Garcia",
        status: "Completed",
        dueDate: "2023-06-01",
      },
      {
        taskId: "2",
        title: "Strategy Planning",
        assignedTo: "Jessica Rodriguez",
        status: "Completed",
        dueDate: "2023-07-01",
      },
      {
        taskId: "3",
        title: "Content Creation",
        assignedTo: "Daniel Hernandez",
        status: "Completed",
        dueDate: "2023-09-01",
      },
      {
        taskId: "4",
        title: "Campaign Launch",
        assignedTo: "Laura Clark",
        status: "Completed",
        dueDate: "2023-10-01",
      },
    ],
  },
  {
    id: "4",
    name: "Project Delta",
    description: "A project to develop a new e-commerce platform.",
    status: "In Progress",
    startDate: "2024-02-01",
    endDate: "2024-11-01",
    tasks: [
      {
        taskId: "1",
        title: "Requirement Gathering",
        assignedTo: "Paul Lopez",
        status: "Completed",
        dueDate: "2024-03-01",
      },
      {
        taskId: "2",
        title: "Platform Design",
        assignedTo: "Linda Gonzalez",
        status: "In Progress",
        dueDate: "2024-05-01",
      },
      {
        taskId: "3",
        title: "Development",
        assignedTo: "Mark Lewis",
        status: "Pending",
        dueDate: "2024-08-01",
      },
      {
        taskId: "4",
        title: "User Testing",
        assignedTo: "Nancy Young",
        status: "Pending",
        dueDate: "2024-10-01",
      },
    ],
  },
  {
    id: "5",
    name: "Project Epsilon",
    description: "A project to migrate data to a new cloud system.",
    status: "Not Started",
    startDate: "2024-04-01",
    endDate: "2024-10-01",
    tasks: [
      {
        taskId: "1",
        title: "Data Assessment",
        assignedTo: "Carlos King",
        status: "Pending",
        dueDate: "2024-04-15",
      },
      {
        taskId: "2",
        title: "Migration Planning",
        assignedTo: "Rebecca Wright",
        status: "Pending",
        dueDate: "2024-05-15",
      },
      {
        taskId: "3",
        title: "Data Migration",
        assignedTo: "Kevin Scott",
        status: "Pending",
        dueDate: "2024-08-01",
      },
      {
        taskId: "4",
        title: "Post-Migration Testing",
        assignedTo: "Patricia Green",
        status: "Pending",
        dueDate: "2024-09-15",
      },
    ],
  },
];

async function injectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.ap86ezp.mongodb.net/projects",
      {
        useNewUrlParser: true, // Optional
        useUnifiedTopology: true, // Optional
      }
    );

    await Project.deleteMany({}); // Clear existing data
    await Project.insertMany(projects); // Insert new data

    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.disconnect();
  }
}

injectDB();

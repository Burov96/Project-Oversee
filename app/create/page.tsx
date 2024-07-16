"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation, useQuery } from "@apollo/client";
import { addProject } from "@/redux/slices/projectSlice";
import { CREATE_PROJECT_MUTATION, GET_DEVS } from "@/apollo/gqlCommands";
import { getTodayDate } from "@/app/lib/getTodaysDate";
import { v4 } from "uuid";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useRouter } from "next/navigation";

const NewProjectForm = () => {
  const { loading, error, data } = useQuery(GET_DEVS);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const devs = data?.projects || [];
  const assignedToList = devs.flatMap((project:any) =>
    project.tasks.map((task:any) => task.assignedTo)
  );
  
  const [project, setProject] = useState({
    name: "",
    description: "",
    status: "Not Started",
    startDate: getTodayDate(),
    endDate: "",
    tasks: [
      {
        taskId: v4(),
        title: "",
        assignedTo: "",
        status: "Pending",
        dueDate: "",
      },
    ],
  });
  const [createProject] = useMutation(CREATE_PROJECT_MUTATION);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "assignedTo" || name === "title" || name === "dueDate") {
        setProject({
          ...project,
          tasks: [
            {
              ...project.tasks[0],
              [name]: value,
            },
          ],
        });
      } else {
        setProject({
          ...project,
          [name]: value,
        });
      }
    console.log(project);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const { data } = await createProject({
    //   variables: { input: project },
    // });
    // dispatch(addProject(data.createProject));
    setSuccess(true)
    setTimeout(() => {
       router.push('/dashboard')
    },3000);
  };

  return (
    !success?
    <form
      onSubmit={handleSubmit}
      className="mt-[5rem] p-6 bg-gray-900 text-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block mb-2" htmlFor="name">
          Project Name
        </label>
        <input
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="description">
          Project Description
        </label>
        <input
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          type="text"
          name="description"
          value={project.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="endDate">
          End Date
        </label>
        <input
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          type="date"
          name="endDate"
          value={project.endDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="assignedTo">
          Assign to
        </label>
        <select
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          name="assignedTo"
          value={project.tasks[0].assignedTo}
          onChange={handleChange}
          required
        >
          <option value="">Select an assignee</option>
          <optgroup label="Previously assigned employees">
            {assignedToList.map((assignedTo:any) => (
              <option key={assignedTo} value={assignedTo}>
                {assignedTo}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="title">
          Task title 
        </label>
        <input
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          type="text"
          name="title"
          value={project.tasks[0].title}
          onChange={handleChange}
          required />
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="dueDate">
          End Date
        </label>
        <input
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          type="date"
          name="dueDate"
          value={project.tasks[0].dueDate}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
      >
        Create Project
      </button>
    </form>
    :
    <div className="w-screen h-[90svh] flex ">
      <DotLottiePlayer
        src="/success.lottie"
        autoplay
      >
      </DotLottiePlayer>
    </div>
  );
};

export default NewProjectForm;

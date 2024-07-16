"use client";
import { updateProjectStatus } from "@/redux/slices/projectSlice";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import {
  UPDATE_PROJECT_STATUS_MUTATION,
  GET_PROJECT_QUERY,
} from "@/apollo/gqlCommands";
import { ObjectValueNode } from "graphql";

const ProjectDetail = () => {
  const id = usePathname().substring(9);
  const { data, loading, error } = useQuery(GET_PROJECT_QUERY, {
    variables: { id },
  });
  const [updateStatus] = useMutation(UPDATE_PROJECT_STATUS_MUTATION);
  const dispatch = useDispatch();
  const [tempStatus, setTempStatus] = useState("");
  const [status, setStatus] = useState("x");
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    tempStatus!==status?setChanged(true)
    :setChanged(false);
  }, [tempStatus, status]);

  useEffect(() => {
    if (data) {
      setTempStatus(data.project.status);
      setStatus(data.project.status);
    }
  }, [data]);

  const handleStatusChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newStatus = e.target.value;
    setTempStatus(newStatus);
    // tempStatus!==status?setChanged(true)
    // :setChanged(false);
  };
  
  const handleConfirm = async () => {
    const { data } = await updateStatus({
      variables: { id, status: tempStatus },
    });
    if (data) {
      dispatch(updateProjectStatus(data.updateProjectStatus));
    }
    setStatus(tempStatus)
  };




  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const project = data.project;

  return (
    <div className="bg-black text-white p-6">
      <h1 className="text-3xl mb-4">{project.name}</h1>
      <p className="mb-4">{project.description}</p>
      <p className="mb-4">Start Date: {project.startDate}</p>
      <p className="mb-4">End Date: {project.endDate}</p>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="status">
          Status
        </label>
        <select
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          value={tempStatus}
          onChange={handleStatusChange}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      {changed && (
        // <div className="grid place-content-center">
          
              <button
              onClick={handleConfirm}
              className="mx-auto block w-1/3  py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
              Update
            </button>
              /* </div> */
      )}
      <h2 className="text-2xl mb-4">Tasks</h2>
      <ul>
        {project.tasks.map((task:any) => (
          <li key={task.taskId} className="mb-2">
            {task.title} - {task.status} (Assigned to: {task.assignedTo})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;

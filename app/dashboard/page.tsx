"use client";

import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "@/redux/slices/projectSlice";
import { useEffect, useState } from "react";
import { GET_PROJECTS } from "@/apollo/gqlCommands";
import Link from "next/link";
import { RootState } from "@/redux/store";

export default function Dashboard() {
  const [detailed, setDetailed] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_PROJECTS);
  const projects = useSelector(
    (state: RootState) => state.projects.projectList
  );

  useEffect(() => {
    if (data) {
      dispatch(setProjects(data.projects));
    }
  }, [data, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Greshka: <br></br>
        {error.message}
      </p>
    );

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className=' p-2 bg-slate-600 bg-opacity-10 rounded-xl  hover:bg-opacity-5 transition-all '>
      {!detailed &&
        (projects.length === 0 ? (
          <p>No projects yet.</p>
        ) : (
          projects.map((project) => (
            <p
              key={project.id}
              className={`p-2 rounded-lg mt-4 ${
                project.status === "Completed"
                  ? "bg-green-800 bg-opacity-20"
                  : "bg-gray-500 bg-opacity-10"
              }`}
            >
              {'The project "'}
              {
                <Link href={`/project/${project.id}`} className="text-blue-500">
                  {project.name}
                </Link>
              }
              {`\", needs to be done before ` + project.endDate}
            </p>
          ))
        ))}
      {detailed &&
        (projects.length === 0 ? (
          <p>No projects yet.</p>
        ) : (
          projects.map((project) => (
            <p
              key={project.id}
              className={`p-2 rounded-lg mt-4 ${
                project.status === "Completed"
                  ? "bg-green-800 bg-opacity-20"
                  : "bg-gray-500 bg-opacity-10"
              }`}
            >
              {"Project " + ' named "'}
              <Link href={`/project/${project.id}`} className="text-blue-500">
                {project.name}
              </Link>
              {`\" needs to be done before ` +
                project.endDate +
                ". It's current status is : " +
                project.status +
                " and have been initiated on " +
                project.startDate}
            </p>
          ))
        ))}
        </div>
     {projects.length>0&& (<p
        onClick={() => {
          setDetailed((prev) => !prev);
        }}
        className="text-right mt-5 hover:text-blue-700 cursor-pointer"
      >
        {!detailed ? ` View more...` : ` View less...`}
      </p>)}
    </div>
  );
}

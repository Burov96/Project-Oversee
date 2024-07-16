// redux/slices/projectSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  taskId: string;
  title: string;
  assignedTo: string;
  status: string;
  dueDate: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  tasks: Task[];
}

interface ProjectState {
  projectList: Project[];
}

const initialState: ProjectState = {
  projectList: [],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projectList = action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projectList.push(action.payload);
    },
    updateProjectStatus: (state, action: PayloadAction<{ id: string; status: string }>) => {
      const project = state.projectList.find(p => p.id === action.payload.id);
      if (project) {
        project.status = action.payload.status;
      }
    },
  },
});

export const { setProjects, addProject, updateProjectStatus } = projectSlice.actions;
export default projectSlice.reducer;

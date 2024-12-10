"use client";

import { useSearchParams } from "next/navigation";
import { types, Instance } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import Task from "./Task";
import AddTask from "./AddTask";
import TaskFilter from "./TaskFilter";
import { useStore } from "@/stores/StoreProvider";
import { TaskModel } from "@/stores/TaskStore";

const TaskList = observer(() => {
  const { taskStore } = useStore();
  const searchParams = useSearchParams();
  const tasksFilter = searchParams.get("tasks");

  //@ts-ignore
  let filteredTasks: types.Array<Instance<typeof TaskModel>> = taskStore.tasks;
  let filteredTasksOpen: types.Array<Instance<typeof TaskModel>> = taskStore.tasks.filter((task) => task.status === "Open");
  let filteredTaskClosed: types.Array<Instance<typeof TaskModel>> =  taskStore.tasks.filter(
      (task) => task.status === "Closed");

  let filteredTasksArchived: types.Array<Instance<typeof TaskModel>> = taskStore.tasks.filter(
      (task) => task.status === "Archived");


  let cptOpen = 1;
  //filteredTasksOpen = taskStore.tasks.filter((task) => task.status === "Open");
  if (tasksFilter === "Open") {
    filteredTasks = filteredTasksOpen; //taskStore.tasks.filter((task) => task.status === "Open");
  } else if (tasksFilter === "Closed") {
    filteredTasks = filteredTaskClosed;/*taskStore.tasks.filter(
      (task) => task.status === "Closed"
    );*/
  } else if (tasksFilter === "Archived") {
    filteredTasks = filteredTasksArchived;/*taskStore.tasks.filter(
      (task) => task.status === "Archived"
    );*/
  }

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-8 sm:mb-14">
        <div>
          <h1 className="text-2xl font-bold">Today’s Task</h1>
          <p className="text-gray-600">Wednesday, 10 December</p>
        </div>
        <AddTask />
      </div>

      <TaskFilter count = {taskStore.tasks.length}  countOpen = {filteredTasksOpen.length} countClosed = {filteredTaskClosed.length} countArchived = {filteredTasksArchived.length} />

      <div className="flex flex-col gap-2 px-4 py-5 max-h-[600px] overflow-auto">
        {filteredTasks.map((task: any) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            date={task.date}

          />
        ))}
      </div>
    </div>
  );
});

export default TaskList;

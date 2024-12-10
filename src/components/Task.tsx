"use client";

import { Badge } from "./ui/Badge";
import { useState } from "react";
import { useStore } from "@/stores/StoreProvider";
import { observer } from "mobx-react-lite";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  status: string;
  date: Date;
  check: boolean, false;
}

//const Task = observer(({ id, title, description, status , date}: TaskProps) => {
const Task = observer(({ id, title, description, status, date, check = false}: TaskProps) => {
  const { taskStore } = useStore();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-white p-4 rounded shadow mt-1 border-b border-slate-300 max-w-2xl ">
      <div className="flex items-center justify-between accent-blue-100">
        <h3 className="text-lg font-medium ">{title}</h3>

          <div className="inline-flex items-center">
              <label className="flex items-center cursor-pointer relative">
                  <input defaultChecked type="checkbox"
                         className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-blue-500 checked:border-blue-500"
                         id="check-custom-style"/>
                  <span
                      className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
         stroke="currentColor" stroke-width="1">
      <path fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"></path>
    </svg>
    </span>
              </label>
          </div>
      </div>
        <div className="">
      <Badge
        className="my-2"
        variant={
          status === "Open"
            ? "error"
            : status === "Closed"
            ? "warning"
            : "success"
        }
      >
        {status === "Open"
          ? "Open"
          : status === "Closed"
          ? "Closed"
          : "Archived"}
      </Badge>

      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <p className="mt-2 text-sm text-slate-600 float-left">{date.toString()}</p>
        </div>
        <div className="float-right">
            <div className='flex mb-5 -space-x-4'>
                <img className='w-10 h-10 border-2 border-white rounded-full '
                     src='https://pagedone.io/asset/uploads/1704275541.png' alt='Stacked rounded avatar'/>
                    <img className='w-10 h-10 border-2 border-white rounded-full '
                         src='https://pagedone.io/asset/uploads/1704275541.png' alt='Stacked rounded avatar'/>
                        <img className='w-10 h-10 border-2 border-white rounded-full '
                             src='https://pagedone.io/asset/uploads/1704275541.png' alt='Stacked rounded avatar'/>
            </div>
        </div>
    </div>



  );
});

export default Task;

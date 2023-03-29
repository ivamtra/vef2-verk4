import { FC } from "react";
import { DepartmentObject } from "../types";
import Department from "./Department";
import DepartmentForm from "./DepartmentForm";
import React  from 'react';

interface DepartmentsProps {
  departments: DepartmentObject[];
}

const Departments: FC<DepartmentsProps> = (
  departmentsProps: DepartmentsProps
) => {
  const { departments } = departmentsProps;
  return (
    <>
    <DepartmentForm />
      <ul className="">
        {departments.map((department) => {
          return (
            <li key={department.id} className="mt-5">
              <Department department={department} showLink={true} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Departments;

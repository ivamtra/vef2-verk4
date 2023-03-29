import { FC } from "react";
import { DepartmentObject } from "../types";
import { Link } from "react-router-dom";
import DeleteDepartmentButton from "./DeleteDepartmentButton";
import React from 'react';
interface DepartmentProps {
  department: DepartmentObject;
  showLink: boolean;
}

const Department: FC<DepartmentProps> = (departmentProps: DepartmentProps) => {
  const { department, showLink } = departmentProps;
  return (
    <>
      <div className="bg-red-500 md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-xl font-bold mb-4">
          {showLink ? (
            <Link to={`/departments/${department.slug}`}>
              {department.title}
            </Link>
          ) : (
            department.title
          )}
        </h2>
        <p className="text-white mb-4">Lýsing: {department.description}</p>
        <p className="text-white mb-4">
          Áfangar:{" "}
          {
            <Link to={`/departments/${department.slug}/courses`} className="font-bold">
              Áfangar
            </Link>
          }
        </p>
        <p className="text-white mb-4">Síðast uppfært: { new Date(department.updated).toLocaleString()}</p>
      </div>
      {showLink ? (<></>) : (<DeleteDepartmentButton slug={department.slug} />)}
    </>
  );
};

export default Department;

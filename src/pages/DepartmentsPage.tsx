import { useEffect, useState } from "react";
import { BASE_URL } from "../lib/constants";
import Departments from "../components/Departments";
import React  from 'react';


const DepartmentsPage = () => {
  const [departments, setDepartments] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/departments`)
      .then((res) => res.json())
      .then((data) => {
        setDepartments(data);
      });
  }, []);
  return (
    <>
      <h1>DepartmentsPage</h1>
      <div className="flex flex-col items-center justify-center">
        {departments ? (
          <Departments departments={departments} />
        ) : (
          <h1>Empty</h1>
        )}
      </div>
    </>
  );
};

export default DepartmentsPage;

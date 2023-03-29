import { useEffect, useState } from "react";
import { BASE_URL } from "../lib/constants";
import Departments from "../components/Departments";
import React from "react";
import { useFetch } from "../hooks/useFetch";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Empty from "../components/Empty";

const DepartmentsPage = () => {
  const {
    data: departments,
    loading,
    error,
  } = useFetch(`${BASE_URL}/departments`);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  if (error)
    return (
      <>
        <Error message={error} />
      </>
    );

  if (!departments)
    return (
      <>
        <Empty />
      </>
    );

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

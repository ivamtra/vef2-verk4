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
      <div className="flex flex-col items-center justify-center">
      <h1 className=" text-4xl mb-8">Deildarsíða</h1>
        <Departments departments={departments} />
      </div>
    </>
  );
};

export default DepartmentsPage;

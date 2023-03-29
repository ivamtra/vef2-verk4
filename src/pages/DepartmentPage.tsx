import { useParams } from "react-router-dom";
import { BASE_URL } from "../lib/constants";
import Department from "../components/Department";
import { useFetch } from "../hooks/useFetch";
import React from "react";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Empty from "../components/Empty";
import DepartmentForm from "../components/DepartmentForm";

const DepartmentPage = () => {
  const { slug } = useParams();
  const {
    data: department,
    loading,
    error,
  } = useFetch(`${BASE_URL}/departments/${slug}`);

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

  if (!department)
    return (
      <>
        <Empty />
      </>
    );

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4 ">
          <h1 className=" text-4xl mb-8">Deildarsíða</h1>
          <Department department={department} showLink={false} />
          <DepartmentForm department={department} method="PATCH" />
        </div>
      </div>
    </>
  );
};

export default DepartmentPage;

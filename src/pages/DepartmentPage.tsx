import { useParams } from "react-router-dom";
import { BASE_URL } from "../lib/constants";
import Department from "../components/Department";
import { useFetch } from "../hooks/useFetch";
import React  from 'react';

const DepartmentPage = () => {
  const { slug } = useParams();
  const { data: department, loading, error } = useFetch(`${BASE_URL}/departments/${slug}`);

  if (error) {
    return (
      <>
        <h1 className=" text-3xl text-red-600">Error: {error}</h1>
      </>
    );
  }



  
  if (loading) {
    return (
      <>
        <h1 className="text-3xl">Loading...</h1>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1>DepartmentPage</h1>
        {department ? <Department department={department} showLink={false} /> : <h1>Loading</h1>}
      </div>
    </>
  );
};

export default DepartmentPage;

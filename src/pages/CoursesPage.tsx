import { useParams } from "react-router-dom";
import { BASE_URL } from "../lib/constants";
import Courses from "../components/Courses";
import React from "react";
import CourseForm from "../components/CourseForm";
import Empty from "../components/Empty";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

const CoursesPage = () => {
  const { slug } = useParams();
  const {
    data: courses,
    loading,
    error,
  } = useFetch(`${BASE_URL}/departments/${slug}/courses`);

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

  if (!courses)
    return (
      <>
        <Empty />
      </>
    );

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-4xl mb-8">Áfangasíða</h1>
        <CourseForm method="POST" />
        <Courses courses={courses} slug={slug} />
      </div>
    </>
  );
};

export default CoursesPage;

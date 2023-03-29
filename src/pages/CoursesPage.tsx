import { useEffect, useState } from "react";
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
      <h1>CoursesPage</h1>
      <div className="flex flex-col items-center justify-center">
        <CourseForm method="POST" />
        <Courses courses={courses} slug={slug} />
      </div>
    </>
  );
};

export default CoursesPage;

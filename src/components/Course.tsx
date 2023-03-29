import { Link } from "react-router-dom";
import { CourseObject } from "../types";
import React from "react";

interface CourseProps {
  course: CourseObject;
  slug?: string;
}

const Course = (courseProps: CourseProps) => {
  const { course, slug } = courseProps;
  console.log("Hello");

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-4">
        <div className="px-4 py-2 flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/4 mr-4">
            <p className="text-gray-700 font-bold text-lg">
              <Link to={`/departments/${slug}/courses/${course.courseId}`}>
                {course.courseId}
              </Link>
            </p>
          </div>
          <div className="md:w-3/4">
            <p className="text-gray-800">{course.title}</p>
            <p className="text-gray-600">{course.semester}</p>
            <p className="text-gray-600">{course.level}</p>
            <p className="text-gray-600">{course.units} einingar</p>
            <a href={course.url} className="text-blue-600 underline">
              {course.url}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;

import { CourseObject } from "../types";
import Course from "./Course";
import React from 'react';


interface CoursesProps {
  courses: CourseObject[];
  slug?: string
}

const Courses = (coursesProps: CoursesProps) => {
  const { courses, slug } = coursesProps;
  return (
    <ul>
      {courses.map((course) => {
        return <li key={course.id}>
            <Course course={course} slug={slug}/>

        </li>;
      })}
    </ul>
  );
};

export default Courses;

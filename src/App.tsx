import "./App.css";
import { Routes, Route } from "react-router-dom";
import DepartmentPage from "./pages/DepartmentPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import CoursesPage from "./pages/CoursesPage";
import Layout from "./layouts/Layout";
import React  from 'react';
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/departments" element={<DepartmentsPage />}>
          {" "}
        </Route>
        <Route path="/departments/:slug" element={<DepartmentPage />}>
          {" "}
        </Route>
        <Route path="/departments/:slug/courses" element={<CoursesPage />}>
          {" "}
        </Route>
        <Route path="/departments/:slug/courses/:courseId" element={<CoursePage />}>
          {" "}
        </Route>
        <Route path="/" element={<HomePage />}>
          {" "}
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;

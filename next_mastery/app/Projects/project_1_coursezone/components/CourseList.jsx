"use client";
import React from "react";
import {
  FaCode,
  FaJava,
  FaPhp,
  FaPython,
  FaReact,
  FaServer,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { courses, courseDetails } from "../data";
import Link from "next/link";

const CourseList = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center text-light my-3">
        Welcome To CourseZone - following Course we offer
      </h1>

      <div className="row w-100 justify-content-center my-5">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div
              className="card p-4 text-center"
              style={{
                backgroundColor: "#2F2F3F",
                borderRadius: "12px",
                cursor: 'pointer',
                width: "100%",
                border: "1px solid rgba(255,255,255.0.1)",
                transition: "all 0.3s ease",
                boxShadow:'0px 4px 8px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div className="display-4 mb-3"> {course.icon} </div>
              <h5 className="text-light">{course.title}</h5>
              <Link href={`/Projects/project_1_coursezone/${course.id}`} className="btn btn-outline-warning mt-4 ">Explore Course</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;

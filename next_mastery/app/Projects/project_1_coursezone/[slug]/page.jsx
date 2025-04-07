"use client";
import React from "react";
import { courseDetails } from "../data";
import { FaClock, FaLayerGroup, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const page = ({ params }) => {
  const { slug } = React.use(params);

  const course = courseDetails.find((course) =>
    course.title.toLowerCase().includes(slug.toLowerCase())
  );

  const router = useRouter();

  console.log("getting course based on slug =",course);
  console.log("slug: ",slug);
  return (
    <div>
      <div
        className="container-fluid min-vh-100 d-flex justify-content-center align-items-center text-center"
        style={{
          background: "linear-gradient(135deg,#0f172a,#12293b)",
          color: "#f8fafc",
          padding: "50px",
        }}
      >
        <div
          className="card p-4"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "630px",
          }}
        >
          <div className="card-body text-center">
            <h1 className="text-warning">{course.title}</h1>
            <span className="badge bg-gradient bg-primary px-3 py-2 mx-3">
              <FaClock /> {course.duration}
            </span>
            <span className="badge bg-gradient bg-success px-3 py-2">
              <FaLayerGroup /> {course.level}
            </span>
          </div>
          <h3 className="text-light mt-4">Projects You Can Build: </h3>
          <ul className="list-group mt-3">
            {course.projects.map((project) => (
              <li
                key={project.id}
                className="list-group-item border-0 text-light"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  trasition: "all 0.3 ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.1)")
                }
              >
                {project.title}
              </li>
            ))}
          </ul>
          <div className="d-grid col-sm-6 m-auto">
            <button
              className="btn btn-outline-warning mt-4 shadow-sm"
              onClick={() => router.push("/Projects/project_1_coursezone")}
            >
              <FaArrowLeft /> Back To Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

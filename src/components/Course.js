// src/components/Course.js
import React from "react";
import PropTypes from "prop-types";
import "./styles1.css";

const Course = ({ course, isEnrolled, onEnroll, onUnenroll }) => {
  return (
    <div className="course-card">
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      {isEnrolled ? (
        <button onClick={() => onUnenroll(course.id)} className="unenroll-button">
          Unenroll
        </button>
      ) : (
        <button onClick={() => onEnroll(course.id)} className="enroll-button">
          Enroll
        </button>
      )}
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isEnrolled: PropTypes.bool.isRequired,
  onEnroll: PropTypes.func.isRequired,
  onUnenroll: PropTypes.func.isRequired,
};

export default Course;

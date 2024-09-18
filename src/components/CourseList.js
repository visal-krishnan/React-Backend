// src/components/CourseList.js
import React from "react";
import PropTypes from "prop-types";
import Course from "./Course";

const CourseList = ({ courses, enrolledCourses, onEnroll, onUnenroll }) => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          isEnrolled={enrolledCourses.includes(course.id)}
          onEnroll={onEnroll}
          onUnenroll={onUnenroll}
        />
      ))}
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  enrolledCourses: PropTypes.arrayOf(PropTypes.number).isRequired,
  onEnroll: PropTypes.func.isRequired,
  onUnenroll: PropTypes.func.isRequired,
};

export default CourseList;

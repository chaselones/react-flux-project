import React from "react";
import PropTypes from "prop-types";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>

      <tbody>
        {/* Needs to be sent an array of courses on props, then outputs a table */}
        {props.courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

//Prop Types and default props
//PropTypes and Shape:
//Omit isRequired at the end if the prop type is optional
CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authoId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

//default props
//Will default to an empty array if we don't get an array of courses
CourseList.defaultProps = {
  courses: [],
};

export default CourseList;

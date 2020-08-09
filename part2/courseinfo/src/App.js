import React from 'react';
import Course from './components/Course';

const App = ({ courses }) => {
  return (
    <>
      <div>
        <h1>Web Development Curriculum</h1>
      </div>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </>
  )
}

export default App;
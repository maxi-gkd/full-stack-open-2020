import React from 'react';

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
        </div>
    )
}

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    const sum = course.parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <div>
            {course.parts.map(part =>
                <Part key={part.id} part={part} />)}

            <b>Number of exercises {sum}</b>
        </div>
    )
}

export default Course;
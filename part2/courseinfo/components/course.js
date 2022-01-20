const Course = ({course}) => {
    console.log(course)
    return(
        <>
            <Header name = {course.name} />
            <Content parts = {course.parts} />
        </>
    )
}
const Header = ({name}) => {
    return(
        <>
        <h1>{name}</h1>
        </>
    )
}

const Content = ({parts}) => {
    console.log(parts)
    const total = parts.reduce((s, p) => {
        return  s + p.exercises
      }, 0)
    return (
        <>
            {parts.map( part => <ul key = {part.id}>{part.name} {part.exercises}</ul>)}
            <h2>total of {total} exercises</h2>
        </>
    )
}

export default Course;

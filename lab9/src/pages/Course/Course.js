import CourseItem from "../../components/CourseItem"

function Course() {
    const courseList = require('../../courses.json')
    return (
        <>
            <h2>Course List</h2>
            <div className="d-flex flex-row flex-wrap justify-content-start py-2">
                {courseList.map((course) => <CourseItem info={course}></CourseItem>)}
            </div>
        </>
    )
}

export default Course
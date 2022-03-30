import "./CourseItem.css"

function CourseItem(props) {
    const info = props.info
    return (
        <div className="card mt-2 mr-3">
            <div className="card-header">
                <h3 className="card-title">{info.code}</h3>
                <p id="course-name" className="card-text">{info.name}</p>
            </div>
            <div className="card-body">
                <p id="intro" className="card-text">{info.intro}</p>
            </div>
        </div>
    )
}

export default CourseItem
import { useState } from "react"

function PayForm() {
    const courseList = require('../courses.json')

    const [inputs, setInputs] = useState({
        courseCode: 'ITI 1100'
    })
    const handleChange = function(event) {
        console.log(event.target.name)
        var name = event.target.name
        var value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = function(event) {
        
    }
    return (
        <form className="border px-4" onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="course-name">Course Code</label>
                <select className="form-control" name="courseCode" value={inputs.courseCode} onChange={handleChange}>
                    {courseList.map((course) => <option value={course.code}>{course.code}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label for="card-number">Card Number</label>
                <input id="card-number" className="form-control" name="cardNumber" value={inputs.cardNumber || ''} onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label for="expire-date">Expire Date</label>
                <input id="expire-date" type="date" className="form-control" name="date" value={inputs.date || ''} onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label for="cvv">CVV</label>
                <input id="cvv" className="form-control" name="cvv" value={inputs.cvv || ''} onChange={handleChange}></input>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default PayForm
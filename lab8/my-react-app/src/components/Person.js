function Person(props) {
    var name = props.name
    var age = props.age
    function info() {
        alert(name + ", " + age)
    }
    return (
        <div>
            <p>My name is {name}.</p>
            <p>I am {age} years old.</p>
            <button onClick={info}>Click</button>
        </div>
    )
}

export default Person
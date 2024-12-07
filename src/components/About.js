import React from "react"
import UserClass from "./UserClass"

class About extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render(){
        return (
            <div className="about-container">
                <h1>About Page</h1>
                <UserClass name="Sabah Js" location="Kannur, Kambil" contact="sabah@gmail.com"/>
            </div>
        )
    }
}

export default About
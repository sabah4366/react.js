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
            <div className="container m-auto ">
                 
                <div className="w-6/12 justify-between m-auto mt-5">
                <h1 className="w-6/12  text-center justify-between m-auto font-semibold text-xl pt-10">About Page</h1>
                    <UserClass name="Sabah Js" location="Kannur, Kambil" contact="sabah@gmail.com"/>
                </div>
            </div>
        )
    }
}

export default About
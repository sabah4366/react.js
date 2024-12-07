import { Component } from "react"
import { jsx } from "react/jsx-runtime"

class UserClass extends Component {
    constructor(props){
        super(props)
        
        console.log('child constructor')
        this.state = { }
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/sabah4366')
        const json = await data.json()
        console.log('data',json)
        console.log('child did mount')
    }

    

    

    render() {
        const { name,location,contact } = this.props
        console.log('child render')
        return(
            <div className="user-container">
                <h2>Name:{ name }</h2>
                <h4>Location:{ location }</h4>
                <p>Contact : { contact }</p>
            </div>
        )
    }
}

export default UserClass;
import { Component } from "react"
import Shimmer from "./Shimmer";
class UserClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            json: null
        };
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/sabah4366')
        const json = await data.json()
        this.setState({json})
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
        
    }
    

    

    render()  {
        if(!this.state.json){
            return <Shimmer />
        }
        
        const { name,location,avatar_url } = this.state.json
        
        return(
            <div className="container pt-12  text-center m-auto">
                <div className="w-6/12 justify-between m-auto text-lg font-medium">
                    <div >
                        <img className="user-img" src={avatar_url}/>
                    </div>
                    <h2>Name:{ name }</h2>
                    <h4>Location:{ location }</h4>
                </div>
            </div>
        )
    }
}

export default UserClass;
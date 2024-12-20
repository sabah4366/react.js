
const Contact = () => {
    
    return (
        <div className="w-6/12 m-auto text-center mt-5">
            <h1 className="font-bold text-2xl">Contact Information</h1>
            <div className="fle">
                <form> 
                    <div className="m-2">
                        <input type="text" className="border-2 p-2 border-black rounded-xl" placeholder="name"/>
                    </div>
                    <div >
                        <input type="text" className="border-2 p-2 border-black rounded-xl" placeholder="massage"/>
                    </div>
                    <div className="m-2">
                        <button className="border-2 border-blue-300 ps-5 pe-5  bg-blue-400 text-white font-semibold rounded-xl">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
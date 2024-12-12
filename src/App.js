import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body  from "./components/Body";
import About from "./components/About";
import Error from "./components/Error"
import Contact from "./components/Contact";
import { BrowserRouter , Routes ,Route, Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    const [userName,setUserName] = useState();

    useEffect(() =>{
        const data = {
            name:"Akshay"
        }
        setUserName(data.name)
    },[])

    return (
        <div className="app">
            {/* we can also pass setUserName updating function */}
            <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
            <Header/>
            <Outlet/>
            </UserContext.Provider>
            
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<Body />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/grocery" element={
                    <Suspense fallback={ <Shimmer />}>
                        <Grocery />
                    </Suspense>
                    } />
                <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
            </Route>
            <Route path="*" element={<Error />}/>
        </Routes>
   </BrowserRouter>
)
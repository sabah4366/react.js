import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body  from "./components/Body";
import About from "./components/About";
import Error from "./components/Error"
import Contact from "./components/Contact";
import { BrowserRouter , Routes ,Route, Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
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
                <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
            </Route>
            <Route path="*" element={<Error />}/>
        </Routes>
   </BrowserRouter>
)
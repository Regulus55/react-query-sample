import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQueryWrapper from "./Provider";


const App = () => {
    return (
        <ReactQueryWrapper>
            <RouterProvider router={router}/>
        </ReactQueryWrapper>
    )
};

export default App;

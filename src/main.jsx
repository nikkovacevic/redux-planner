import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link, Outlet
} from 'react-router-dom';
import './main.css'
import Navbar from './components/Navbar.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import store from './redux/store'
import { Provider} from 'react-redux';
import HomePage from './routes/HomePage.jsx';

const AppLayout = () => (
    <>
        <Navbar/>
        <Outlet/>
    </>
)

const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            }
        ]
    }
]);

createRoot(document.getElementById("root")).render(
    <ChakraProvider>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </ChakraProvider>
);

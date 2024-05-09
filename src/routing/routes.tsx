import { createBrowserRouter } from "react-router-dom";

import AboutPage from "../components/pages/AboutPage";
import Layout from "../components/Layout";
import HomePage from "../components/pages/HomePage";
import FormsPage from "../components/pages/FormsPage";
import ContactPage from "../components/pages/ContactPage";
import NotFoundPage from "../components/pages/NotFoundPage";



const router = createBrowserRouter([

    {
        path:'/', 
        element: <Layout />,
        children: [
            { path: '', element: <HomePage /> }, 
            {path: 'about', element: <AboutPage/> }, 
            {path: 'forms', element: <FormsPage/> }, 
            {path: 'contact', element: <ContactPage/> }, 
            {path: '*', element: <NotFoundPage /> }

        ]

    }

  

]);

export default router;
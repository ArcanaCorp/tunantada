import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";

import './shared/css/global.css'
import './shared/css/system.css'

createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={router} />
    </>
)
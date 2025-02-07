import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Compo from './componentsZ/Compo';
import Fragments from './fragmentZ/Fragments';
import Dvalue from './dynamic value/Dvalue';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/compo",
        element: <Compo></Compo>,
      },
      {
        path: "/fragments",
        element: <Fragments></Fragments>,
      },
      {
        path: "/dvalue",
        element: <Dvalue></Dvalue>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

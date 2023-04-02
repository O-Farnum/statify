import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
import Login from './Components/Pages/Login';
import Songs from './Components/Pages/Songs';
import Home from './Components/Pages/Home';
import Artists from './Components/Pages/Artists';
import Genres from './Components/Pages/Genres';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import {mainTheme} from './Components/Theme/mainTheme';
import { ThemeProvider } from '@mui/material/styles';

const router = createBrowserRouter([
  {
    path: "/",
    element: [<App />, <Login />],
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'artists',
        element: <Artists />,
      },
      {
        path: 'songs',
        element: <Songs />,
      },
      {
        path: 'genres',
        element: <Genres />,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


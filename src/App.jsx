import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Movie } from "./Pages/Movie";
import { Contact, contactData } from "./Pages/Contact";
import AppLayout from "./Components/Layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./Pages/Errorpage";
import { getMoviesData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
          {
            path:"/",
            element:<Home />,
          },
          {
            path:"/about",
            element:<About />,
          }, 
          {
            path:"/movie",
            element:<Movie />,
            loader: getMoviesData,
          },
          {
            path:"/movie/:movieID",
            element:<MovieDetails />,
            loader: getMovieDetails,
          },
          {
            path:"/contact",
            element:<Contact />,
            action: contactData,
          },
      ],
    },
  ]);     
   
  return <RouterProvider router={router} />;
};

export default App;
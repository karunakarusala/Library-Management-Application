import React from "react";
import Student from "./Client/Student";
import Book from "./Client/Book";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Library from "./Client/Library";
function App() {
  const routers = createBrowserRouter([
    {
      path : '/student',
      element : <Student/>
    },
    {
      path : '/library',
      element : <Library/>
    },
    {
      path : '/book',
      element : <Book/>
    }
  ])
  return (
    <div className="App">    
        <RouterProvider router={routers}/>
    </div>    
  );
}
export default App;

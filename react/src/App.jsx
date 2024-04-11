import Home from "./pages/Home"
import Product from "./pages/Product";
import ProductList from './pages/ProductList'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: (<Home/>)
  },
  {
    path: "/shop",
    element: <ProductList />
  },
  {
    path: "/shop/:category",
    element: <ProductList />
  },
  {
    path: "/product/:id",
    element: <Product />
  },
  {
    path: "*",
    element: (<div>not found</div>)
  }

])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

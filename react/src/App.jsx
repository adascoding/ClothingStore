import Home from "./pages/Home"
import Product from "./pages/Product";
import ProductList from './pages/ProductList'
import { Provider } from 'react-redux';
import { store } from './redux/store';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from "./pages/Cart";

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
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "*",
    element: (<div>not found</div>)
  }

])

function App() {

  return (
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  )
}

export default App

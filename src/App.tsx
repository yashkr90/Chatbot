import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import MyChatbot from './Components/pages/MyChatbot';
import Page3 from "./Components/pages/Page3";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/pages/Home"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import { useSelector } from 'react-redux';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/chatbot" element={<MyChatbot />}  />
      <Route path="/page3" element={<Page3 />} />
    </Route>
  )
);

function App() {
  // const [count, setCount] = useState(0)

  const reduxData = useSelector((state: any)=> state.user);
  console.log('reduxData: ', reduxData);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<AllTasks />} />
  <Route path="/add" element={<AddTask />} />
  <Route path="/deadLines" element={<Deadlines />} />
  <Route path="/calender" element={<Calender />} />
  <Route path="/edit/:id" element={<EditTask />} />
</Routes>
</BrowserRouter> */}
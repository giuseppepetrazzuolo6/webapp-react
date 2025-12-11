import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./assets/layouts/DefaultLayout"
import HomePage from './assets/pages/HomePage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

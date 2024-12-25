import { Fragment } from "react"
import MainNavigation from "./components/MainNavigation"
import AllQuotes from "./components/AllQuotes"
import NewQuotes from "./components/NewQuotes"
import { Routes,Route } from "react-router-dom"
import ShowQuote from "./components/ShowQuote"

const App = () => {


  return (
    <Fragment>
      <MainNavigation />
      <Routes>
          <Route element={<AllQuotes />} path='/' ></Route>
          <Route element={<NewQuotes />} path='/new' ></Route>
          <Route element={<ShowQuote />} path='/quotes/:id' ></Route>
      </Routes>
    </Fragment>
  )
}

export default App

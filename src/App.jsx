import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle"
import "./App.scss"
import Routes from './Pages/Routes'
import Hero from './Pages/Frontend/Home/Hero'
import ScreenLoader from './Components/Misc/ScreenLoader'
import { useAuth } from './Config/Auth'
const App = () => {
  const { isAppLoading } = useAuth()

  return (
    <>
      {isAppLoading ? (
        <ScreenLoader />
      ) : (
        <Routes />
      )}
    </>
  )

}

export default App
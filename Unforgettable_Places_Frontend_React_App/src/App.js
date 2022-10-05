import { useState, useCallback } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NewPlace from "./places/pages/NewPlace"
import UserPlaces from "./places/pages/UserPlaces"
import MainNavigation from "./shared/components/Navigation/MainNavigation"
import Users from './user/pages/Users'
import UpdatePlace from "./places/pages/UpdatePlace"
import Auth from "./user/pages/Auth"
import { AuthContext } from "./shared/context/auth-context"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/:userId/places' element={<UserPlaces />} />
            <Route path='/places/new' element={isLoggedIn && <NewPlace />} />
            <Route path='/places/:placeId' element={isLoggedIn && <UpdatePlace />} />
            <Route path='/auth' element={!isLoggedIn && <Auth />} />
            {/* <Route path='*' element={<Error />} replace /> */}
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;

import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import NewPlace from "./places/pages/NewPlace"
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner'
import UserPlaces from "./places/pages/UserPlaces"
import MainNavigation from "./shared/components/Navigation/MainNavigation"
import Users from './user/pages/Users'
import UpdatePlace from "./places/pages/UpdatePlace"
import Auth from "./user/pages/Auth"
import { AuthContext } from "./shared/context/auth-context"
import { useAuth } from './shared/hooks/auth-hook'

const NewPlace = React.lazy(() => import('./places/pages/NewPlace'))

function App() {
  const { token, login, logout, userId } = useAuth()

  return (
    <AuthContext.Provider value={{
      isLoggedIn: !!token,
      token: token,
      userId: userId,
      login: login,
      logout: logout
    }}>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/:userId/places' element={<UserPlaces />} />
            <Route path='/places/new' element={token &&
              <Suspense fallback={<div><LoadingSpinner /></div>}>
                <NewPlace />
              </Suspense>
            } />
            <Route path='/places/:placeId' element={token && <UpdatePlace />} />
            <Route path='/auth' element={!token && <Auth />} />
            {/* <Route path='*' element={<Error />} replace /> */}
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  )
}

export default App

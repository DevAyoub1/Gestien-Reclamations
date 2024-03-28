import {createContext, useContext, useState} from "react";
import ReclamationApi from "./ReclamationApi";



export const ReclamationStateContext = createContext({
  user: {},
  authenticated: false,
  setUser: () => {
  },
  logout: () => {
  },
  login: (email, password) => {
  },
  setAuthenticated: () => {
  },
  setToken: () => {
  },
})
export default function ReclamationContext({children}) {
  const [user, setUser] = useState([])
  const [authenticated, _setAuthenticated] = useState('true' === window.localStorage.getItem('AUTHENTICATED'))

  const login = async (email, password) => {
    return ReclamationApi.login(email, password)
  }
  const logout = () => {
    setUser({})
    setAuthenticated(false)
  }

  const setAuthenticated = (isAuthenticated) => {
    _setAuthenticated(isAuthenticated)
    window.localStorage.setItem('AUTHENTICATED', isAuthenticated)
  }

  const setToken = (token) => {
    window.localStorage.setItem('token', token)
  }

  return <>
    <ReclamationStateContext.Provider value={{
      user,
      login,
      logout,
      setUser,
      authenticated,
      setAuthenticated,
      setToken
    }}>
      {children}
    </ReclamationStateContext.Provider>
  </>
}
export const UserContext = () => useContext(ReclamationStateContext);
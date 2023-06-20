import React from 'react'
import { Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';

function Protected({ children }) {
    const [cookies, setCookie] = useCookies(['user']);
  if (cookies.email === null) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected
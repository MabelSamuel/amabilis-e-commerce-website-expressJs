import React from 'react'
import { Navigate } from 'react-router-dom'
import { useDashboardAuth } from '@/context/DashboardAuthContext'

const ProtectedDashboardRoute = ({ children }) => {
    const { isLoggedIn } = useDashboardAuth();
  return isLoggedIn ? children : <Navigate to="/admin/login" />
}

export default ProtectedDashboardRoute
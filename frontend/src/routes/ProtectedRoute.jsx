import { Navigate, Outlet } from 'react-router-dom'

// SHARED INTEGRATION FILE — coordinate before editing.
// Placeholder guard — always allows through until auth is wired up.
export default function ProtectedRoute() {
  const isAuthenticated = true
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}

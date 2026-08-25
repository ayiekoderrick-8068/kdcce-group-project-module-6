import { Routes } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes'
import AdminRoutes from './routes/AdminRoutes'
import StaffRoutes from './routes/StaffRoutes'
import VolunteerRoutes from './routes/VolunteerRoutes'

// SHARED INTEGRATION FILE — coordinate before editing. Route trees live in
// src/routes/*.jsx — do not add page routes directly in this file.
export default function App() {
  return (
    <Routes>
      {PublicRoutes}
      {AdminRoutes}
      {StaffRoutes}
      {VolunteerRoutes}
    </Routes>
  )
}

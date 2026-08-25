import { Route } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from '../pages/admin/Dashboard'
import Users from '../pages/admin/Users'
import Programs from '../pages/admin/Programs'
import Events from '../pages/admin/Events'
import ElderlyMembers from '../pages/admin/ElderlyMembers'
import Attendance from '../pages/admin/Attendance'
import Donations from '../pages/admin/Donations'
import Inventory from '../pages/admin/Inventory'
import HomeVisits from '../pages/admin/HomeVisits'
import AssistanceRequests from '../pages/admin/AssistanceRequests'
import Volunteers from '../pages/admin/Volunteers'
import Inbox from '../pages/admin/Inbox'
import Incidents from '../pages/admin/Incidents'
import Blog from '../pages/admin/Blog'
import Gallery from '../pages/admin/Gallery'
import Reports from '../pages/admin/Reports'
import Analytics from '../pages/admin/Analytics'

// SHARED INTEGRATION FILE — coordinate before editing.
export default (
  <Route element={<ProtectedRoute />}>
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="programs" element={<Programs />} />
      <Route path="events" element={<Events />} />
      <Route path="elderly-members" element={<ElderlyMembers />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="donations" element={<Donations />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="home-visits" element={<HomeVisits />} />
      <Route path="assistance-requests" element={<AssistanceRequests />} />
      <Route path="volunteers" element={<Volunteers />} />
      <Route path="inbox" element={<Inbox />} />
      <Route path="incidents" element={<Incidents />} />
      <Route path="blog" element={<Blog />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="reports" element={<Reports />} />
      <Route path="analytics" element={<Analytics />} />
    </Route>
  </Route>
)

import { Route } from 'react-router-dom'
import VolunteerLayout from '../layouts/VolunteerLayout'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from '../pages/volunteer/Dashboard'
import Profile from '../pages/volunteer/Profile'
import Assignments from '../pages/volunteer/Assignments'
import AssistanceRequests from '../pages/volunteer/AssistanceRequests'
import Activity from '../pages/volunteer/Activity'
import Messages from '../pages/volunteer/Messages'
import ReportConcern from '../pages/volunteer/ReportConcern'

// SHARED INTEGRATION FILE — coordinate before editing.
export default (
  <Route element={<ProtectedRoute />}>
    <Route path="/volunteer" element={<VolunteerLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="assistance-requests" element={<AssistanceRequests />} />
      <Route path="activity" element={<Activity />} />
      <Route path="messages" element={<Messages />} />
      <Route path="report-concern" element={<ReportConcern />} />
    </Route>
  </Route>
)

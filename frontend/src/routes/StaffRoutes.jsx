import { Route } from 'react-router-dom'
import StaffLayout from '../layouts/StaffLayout'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from '../pages/staff/Dashboard'
import MyTasks from '../pages/staff/MyTasks'
import MySchedule from '../pages/staff/MySchedule'

// SHARED INTEGRATION FILE — coordinate before editing.
export default (
  <Route element={<ProtectedRoute />}>
    <Route path="/staff" element={<StaffLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="my-tasks" element={<MyTasks />} />
      <Route path="my-schedule" element={<MySchedule />} />
    </Route>
  </Route>
)

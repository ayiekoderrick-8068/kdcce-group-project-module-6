import { Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import AuthLayout from '../layouts/AuthLayout'
import Home from '../pages/public/Home'
import About from '../pages/public/About'
import Programs from '../pages/public/Programs'
import ProgramDetail from '../pages/public/ProgramDetail'
import Events from '../pages/public/Events'
import EventDetail from '../pages/public/EventDetail'
import Gallery from '../pages/public/Gallery'
import Blog from '../pages/public/Blog'
import BlogPost from '../pages/public/BlogPost'
import Donate from '../pages/public/Donate'
import Crafts from '../pages/public/Crafts'
import Contact from '../pages/public/Contact'
import BecomeAVolunteer from '../pages/public/BecomeAVolunteer'
import Login from '../pages/auth/Login'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ResetPassword from '../pages/auth/ResetPassword'

// SHARED INTEGRATION FILE — coordinate before editing.
export default (
  <>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/:id" element={<ProgramDetail />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/crafts" element={<Crafts />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/become-a-volunteer" element={<BecomeAVolunteer />} />
    </Route>
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Route>
  </>
)

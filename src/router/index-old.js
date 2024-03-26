import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home-page'
import UserLayout from '../layouts/user-layout'
import AboutPage from '../pages/about-page'
import NotFoundPage from '../pages/not-found-page'
import LoginPage from '../pages/login-page'
import CoursesPage from '../pages/courses-page'
import EventsPage from '../pages/events-page'
import ContactPage from '../pages/contact-page'

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="courses" element={<CoursesPage />} />
                    <Route path="events" element={<EventsPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="login" element={<LoginPage />} />

                    </Route>


<Route path="*" element={<NotFoundPage />} />
</Routes>
</Router>
  )
}

export default AppRouter          
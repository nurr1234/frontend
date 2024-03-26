import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from '../layouts/user-layout';
import HomePage from '../pages/home-page';
import ContactPage from '../pages/contact-page';
import LoginPage from '../pages/login-page';
import DashboardPage from '../pages/dashboard/dashboard-page';
import LibraryPage from '../components/library-page/library'
import BookPage from '../pages/dashboard/book-page'; 
import AuthorPage from '../pages/dashboard/author-page';
import CategoriesPage from '../pages/dashboard/categories-page';
import PublisherPage from '../pages/dashboard/publisher-page';
import UserPage from '../pages/dashboard/user-page';
import Error404Page from '../pages/errors/error-404';
import Error401Page from '../pages/errors/error-401';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />} >
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="books" element={<BookPage />} />
          <Route path="authors" element={<AuthorPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="publishers" element={<PublisherPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="unauthorized" element={<Error401Page />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from '../layouts/user-layout';
import HomePage from '../pages/home-page';
import ContactPage from '../pages/contact-page';
import LoginPage from '../pages/login-page';
import DashboardPage from '../pages/dashboard/dashboard-page';
import LibraryPage from '../components/library-page/library'
import BookPage from '../pages/dashboard/book-page'; 
import BookNewPage from '../pages/dashboard/book-new-page';
import BookEditPage from '../components/dashboard/book-edit-page';
import AuthorPage from '../pages/dashboard/author-page';
import AuthorNewPage from '../pages/dashboard/author-new-page';
import AuthorList from '../components/dashboard/author-list';
import AuthorDetail from '../components/dashboard/author-detail';
import CategoriesPage from '../pages/dashboard/categories-page';
import CategoryNewPage from '../pages/dashboard/category-new-page';
import PublisherPage from '../pages/dashboard/publisher-page';
import PublisherNewPage from '../pages/dashboard/publisher-new-page';
import UserPage from '../pages/dashboard/user-page';
import ReportsPage from '../pages/dashboard/reports-page';
import Error404Page from '../pages/errors/error-404';
import Error401Page from '../pages/errors/error-401';
import ReportsList from '../components/dashboard/reports-list';


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
          <Route path="book/new" element={<BookNewPage />} />
          <Route path="books/edit" element={<BookEditPage />} />
          <Route path="authors" element={<AuthorPage />} />
          <Route path="author/new" element={<AuthorNewPage />} />
          <Route path="authors" element={<AuthorList />} />
         <Route path="authors/:id" element={<AuthorDetail />} />

          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/new" element={<CategoryNewPage />} />
          <Route path="publishers" element={<PublisherPage />} />
          <Route path="publishers/new" element={<PublisherNewPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="reports" element={<ReportsPage />} />
         <Route path="reports/list" element={<ReportsList />} />
          <Route path="unauthorized" element={<Error401Page />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;

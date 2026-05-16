import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import ServicesPage from './Pages/ServicesPage'
import CategoriesPage from './Pages/CategoriesPage'
import CategoryDetailPage from './Pages/CategoryDetailPage'
import ContactPage from './Pages/ContactPage'
import AdminPage from './Pages/AdminPage'
import Footer from './Components/Footer'
import { AuthProvider } from './Context/AuthContext'
import { ServicesProvider } from './Context/ServicesContext'
import { CategoriesProvider } from './Context/CategoriesContext'
import './i18n'

const App = () => {
  return (
    <AuthProvider>
      <ServicesProvider>
       <CategoriesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/xizmatlar" element={<ServicesPage />} />
          <Route path="/kategoriya" element={<CategoriesPage />} />
          <Route path="/categories/:slug" element={<CategoryDetailPage />} />
          <Route path="/aloqa" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
       </CategoriesProvider>
      </ServicesProvider>
    </AuthProvider>
  )
}

export default App

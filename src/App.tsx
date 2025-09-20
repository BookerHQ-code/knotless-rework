import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsOfServicePage from '@/pages/TermsOfServicePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/privacy' element={<PrivacyPolicyPage />} />
          <Route path='/terms' element={<TermsOfServicePage />} />
          <Route
            path='*'
            element={
              <div className='bg-[#FFE8C9] min-h-screen flex items-center justify-center'>
                <div className='text-center'>
                  <h1 className='text-4xl font-bold text-[#773800] mb-4'>404 - Page Not Found</h1>
                  <p className='text-gray-600 mb-6'>The page you are looking for does not exist.</p>
                  <a
                    href='/'
                    className='bg-gradient-to-r from-[#E9887E] to-[#F4B637] text-white font-semibold py-3 px-6 rounded-xl hover:from-[#d77a6e] hover:to-[#e0a52e] transition-all duration-200'
                  >
                    Go Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

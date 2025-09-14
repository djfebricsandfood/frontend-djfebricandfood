import React, { Suspense, useEffect, useState } from 'react'
import Layout from './utils/Layout'
import { Route, Routes } from 'react-router-dom'
import CommingSoon from './utils/CommingSoon'
import Contact from './section/Contact'
import ProductDetailPage from './pages/productSection/ProductDetailPage'
import Footer from './section/Footer'
import logo from './assets/DjFebricsAndFood2.png'
import Page404 from './utils/Page404'


const HomePage = React.lazy(() => import('./component/HomePage'))
const About = React.lazy(() => import('./section/About'))
const Section = React.lazy(() => import('./section/Section'))
const Product = React.lazy(() => import('./section/Product'))
const Blog = React.lazy(() => import('./section/Blog'))

const App = () => {


  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);


    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1.5;
      });
    }, 45);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  const Loader = () => (
    <div className="fixed inset-0 bg-[#101828] text-white flex flex-col items-center justify-center z-50">

      <div className="mb-12">
        <div className="lg:col-span-1 flex flex-col items-center text-center">

          <div className="w-24 h-24 rounded-full overflow-hidden bg-white p-2 shadow-lg">
            <img src={logo} className="w-full h-full object-contain" alt="DJ Fabrics & Foods Logo" />
          </div>
          <h3 className="text-white text-lg font-bold mt-3">DJ Fabrics & Foods</h3>


          <p className="text-gray-300 leading-relaxed mt-6 mb-4 text-center">
            Delivering Quality Fabrics & Foods <br />
            Building Global Connections
          </p>


          <p className="text-gray-400 text-sm text-center leading-relaxed">
            Your trusted partner in global import and export solutions.
          </p>
        </div>
      </div>


      <div className="w-80 mb-8">
        <div className="w-full h-0.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full transition-all duration-100 ease-out relative"
            style={{ width: `${progress}%` }}
          >

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-pulse"></div>
          </div>
        </div>


        <div className="flex justify-center mt-4">
          <span className="text-slate-400 text-xs font-light tracking-wider">
            {Math.round(progress)}%
          </span>
        </div>
      </div>


      <div className="text-slate-400 text-sm font-light tracking-wide">
        Loading...
      </div>
    </div>
  );

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {/* <CommingSoon/> */}

      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Section />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>

          <Footer />
        </Suspense>

      </Layout>
    </>

  )
}

export default App

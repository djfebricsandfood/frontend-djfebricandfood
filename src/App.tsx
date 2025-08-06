import React, { Suspense } from 'react'
import Layout from './utils/Layout'
import { Route, Routes } from 'react-router-dom'



const HomePage = React.lazy(() => import('./component/HomePage'))
const About = React.lazy(() => import('./section/About'))
const Section = React.lazy(() => import('./section/Section'))
const Product = React.lazy(() => import('./section/Product'))
const Blog = React.lazy(() => import('./section/Blog'))

const App = () => {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About/>}  />
          <Route path="/service" element={<Section />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>

    </Layout>
  )
}

export default App

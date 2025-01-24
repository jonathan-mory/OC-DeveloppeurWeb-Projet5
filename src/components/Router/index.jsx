import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '../../pages/Home'
import Accommodation from '../../pages/Accommodation'
import About from '../../pages/About'
import Error from '../../pages/Error'
import Header from '../Header/index.jsx'
import Footer from '../Footer/index.jsx'

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/accommodation/:accommodationId"
          element={<Accommodation />}
        />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router

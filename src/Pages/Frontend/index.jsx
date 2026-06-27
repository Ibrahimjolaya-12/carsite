import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom' // <-- useLocation امپورٹ کریں
import Home from './Home'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Services from './Services'
import Gallery from './Gallery' 
import Contact from './Contact'
import Policy from './Policy/Policy'
import SecondLink from './Policy/SecondLink'
import Refund from './Policy/Refund'
import Term from './Policy/Term'

const Frontend = () => {
  const location = useLocation(); // <-- موجودہ پاتھ (URL) حاصل کرنے کے لیے

  return (
    <>
      <Header/>
      
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='policy' element={<Policy/>}/>
          <Route path='accessibility' element={<SecondLink/>}/>
          <Route path='refund' element={<Refund/>}/>
          <Route path='terms' element={<Term/>}/>
          {/* گیلری کا روٹ اب درست جگہ پر (Routes کے اندر) ہے */}
          <Route path='gallery' element={<Gallery/>}/> 
      </Routes>

      {/* اگر پاتھ '/gallery' ہو تو فوٹر شو نہیں ہوگا، ورنہ باقی سب پر شو ہوگا */}
      {location.pathname !== '/gallery' && <Footer />}
    </>
  )
}

export default Frontend
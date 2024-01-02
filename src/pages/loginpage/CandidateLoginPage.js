import React from 'react'
import Nav from '../../components/common/Nav';
import Footer from '../../components/common/Footer';
import CandidateLogin from '../../components/logincomponents/CandidateLogin';

function CandidateLoginPage({onLogin}) {
  return (
    <div>
     <Nav />
    <CandidateLogin handleLogin={onLogin}/>
    <Footer />
    </div>
  )
}

export default CandidateLoginPage;
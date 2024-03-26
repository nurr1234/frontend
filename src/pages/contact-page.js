import React from 'react'
import Spacer from "../components/common/spacer";
import Footer from '../components/common/footer';
import Contact from '../components/contact-page/contact';
import Menubar from "../components/common/menubar"
import PageHeader from '../components/common/page-header';

const ContactPage = () => {
  return (
    <>
       <PageHeader title="Contact"/>
       <Footer/>
       <Menubar/>
       <Contact/>
       <Spacer/>

    </>
  )
}

export default ContactPage
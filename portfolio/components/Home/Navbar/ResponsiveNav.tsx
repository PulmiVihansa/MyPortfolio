"use client";
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

  const[showNav, setShowNav]= useState(false);
  const[hideNav, setHideNav]= useState(false);

  const openNavHandler=()=>setShowNav(true);
  const closeNavHandler=()=>setShowNav(false);

  useEffect(() => {
    const handleCertificateModal = (event: Event) => {
      const { open } = (event as CustomEvent<{ open: boolean }>).detail;
      setHideNav(open);

      if (open) {
        setShowNav(false);
      }
    };

    window.addEventListener("certificate-modal-toggle", handleCertificateModal);

    return () => {
      window.removeEventListener("certificate-modal-toggle", handleCertificateModal);
    };
  }, []);

  if (hideNav) {
    return null;
  }


  return (
    <div>
        <Nav openNav={openNavHandler} />
        <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav

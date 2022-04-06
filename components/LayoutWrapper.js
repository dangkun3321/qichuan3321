import React, { useEffect, useRef, useState } from 'react'
import SectionContainer from './SectionContainer'
import Header from './Header'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col ">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

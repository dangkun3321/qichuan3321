import React, { useEffect, useRef, useState } from 'react'
import SectionContainer from './SectionContainer'
import Header from './Header'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col ">
        <Header />
        <main className="mb-auto">
          {children}
          {/* <Footer /> */}
        </main>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

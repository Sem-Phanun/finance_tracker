import React from 'react'
import { Layout } from 'antd'
const { Footer } = Layout
const Footers = () => {
  return (
    <>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Kai the dev ©{new Date().getFullYear()}
        </Footer>
    </>
  )
}

export default Footers
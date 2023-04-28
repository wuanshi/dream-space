import React, { FC, ReactNode } from 'react'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

interface IProps {
  children: ReactNode
}

const Layout: FC<IProps> = (props) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
"use client"
import React from 'react'
import Footer from './Footer'
import { usePathname } from 'next/navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from './Navbar'
import TravelNav from './Travel_nav'

const LayoutProvider = ({children}) => {
    const pathname = usePathname();
    const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
        {pathname !== "/travel" && <Navbar />}
        {pathname == "/travel" && <TravelNav />}
        {children}
        {pathname !== "/travel" && <Footer />}
      </QueryClientProvider>
    </>
  )
}

export default LayoutProvider
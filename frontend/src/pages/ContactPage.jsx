import React from 'react'
import Contact from '@/components/contact/Contact'
import MapView from '@/components/map/MapView'

function ContactPage() {
  return (
    <div className=' py-24 px-20 space-y-10 md:p-10 sm:h-fit sm:p-12 sm:px-6'>
        <MapView />
        <Contact />
    </div>
  )
}

export default ContactPage
import React from 'react'
import Profile from '../components/Profile'
import ServiceCard from '../components/ServiceCard'
import Location from '../components/Location'
import Footer from '../components/Footer'
import servicesData from '../data/services.json'

export default function Index() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen transition-colors duration-300">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col items-center pt-12 pb-12 px-4 sm:px-6">
          {/* Content Wrapper */}
          <div className="w-full max-w-2xl flex flex-col items-center gap-6">
            <Profile />
            
            {/* Spacer */}
            <div className="h-4 w-full"></div>
            
            {/* Section: Services & Pricing */}
            <div className="w-full flex flex-col gap-4">
              <h3 className="text-gray-900 dark:text-white text-xl font-bold px-2 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
                Services & Pricing
              </h3>
              {/* Pricing Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesData.map((service, index) => (
                  <ServiceCard 
                    key={index}
                    title={service.title} 
                    description={service.description} 
                    price={service.price} 
                    icon={service.icon} 
                  />
                ))}
              </div>
            </div>

            <Location />
            
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

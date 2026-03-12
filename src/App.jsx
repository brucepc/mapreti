import Profile from './components/Profile'
import ServiceCard from './components/ServiceCard'
import Location from './components/Location'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import services from './data/services.json'

function App() {
    return (
        <div className="min-h-screen bg-[#F3F0F5] dark:bg-background-dark font-display transition-colors duration-300">
            <main className="flex flex-col items-center justify-center min-h-screen py-14 px-5 space-y-8">
                <Profile />

                <div className="w-full max-w-lg bg-white dark:bg-[#2f1616] rounded-xl p-5 shadow-sm border border-gray-100 dark:border-[#452222] flex items-center gap-4 transition-all hover:shadow-md">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                        </svg>
                    </div>
                    <p className="text-gray-800 dark:text-gray-100 font-semibold leading-relaxed">
                        Valores promocionais válidos até o final de março de 2026
                    </p>
                </div>

                <section className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            price={service.price}
                            originalPrice={service.originalPrice}
                        />
                    ))}
                </section>

                <Location />
                <Footer />
                <CookieBanner />
            </main>
        </div>
    )
}

export default App

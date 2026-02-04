import Profile from './components/Profile'
import ServiceCard from './components/ServiceCard'
import Location from './components/Location'
import Footer from './components/Footer'
import services from './data/services.json'

function App() {
    return (
        <div className="min-h-screen bg-[#F3F0F5] dark:bg-background-dark font-display transition-colors duration-300">
            <main className="flex flex-col items-center justify-center min-h-screen py-14 px-5 space-y-8">
                <Profile />

                <section className="w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            price={service.price}
                        />
                    ))}
                </section>

                <Location />
                <Footer />
            </main>
        </div>
    )
}

export default App

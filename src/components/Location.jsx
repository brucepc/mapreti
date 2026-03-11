import React, { useState, useEffect } from 'react'

export default function Location() {
  const [consent, setConsent] = useState(localStorage.getItem('cookie-consent'))
  const address = "Av General Humberto Delgado n 31, Paio Pires"
  const mapQuery = encodeURIComponent(address)

  useEffect(() => {
    const handleConsentChange = (event) => {
      setConsent(event.detail)
    }

    window.addEventListener('cookieConsentChange', handleConsentChange)
    return () => window.removeEventListener('cookieConsentChange', handleConsentChange)
  }, [])


  return (
    <section className="w-full max-w-lg mt-8">
      <div className="bg-white dark:bg-[#2f1616] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-[#452222]">
        <div className="relative">
          {consent === 'accepted' ? (
            <iframe
              className="h-64 w-full"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização"
            ></iframe>
          ) : (
            <div className="h-64 w-full bg-gray-50 dark:bg-[#3d1d1d] flex flex-col items-center justify-center p-6 text-center gap-4">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-4xl">map</span>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  O Google Maps foi bloqueado para respeitar sua privacidade.
                </p>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('showCookieOverlay'))}
                  className="mt-6 flex items-center justify-center rounded-xl h-12 px-6 bg-[#a30000] text-white gap-2 text-sm font-bold shadow-lg shadow-[#a30000]/20 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Aceitar cookies para ver o mapa</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 flex items-center gap-4">
          <div className="bg-background-light dark:bg-[#3d1d1d] rounded-full w-10 h-10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-sm">Paio Pires, Portugal</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{address}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

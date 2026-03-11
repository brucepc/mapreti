import React, { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
      document.body.style.overflow = 'hidden'
    }

    const handleShowOverlay = () => {
      setIsVisible(true)
      document.body.style.overflow = 'hidden'
    }

    const handleConsentChange = () => {
      setIsVisible(false)
      document.body.style.overflow = ''
    }

    window.addEventListener('cookieConsentChange', handleConsentChange)
    window.addEventListener('showCookieOverlay', handleShowOverlay)
    return () => {
      window.removeEventListener('cookieConsentChange', handleConsentChange)
      window.removeEventListener('showCookieOverlay', handleShowOverlay)
      document.body.style.overflow = ''
    }
  }, [])

  const handleConsent = (choice) => {
    localStorage.setItem('cookie-consent', choice)
    setIsVisible(false)
    document.body.style.overflow = ''
    window.dispatchEvent(new CustomEvent('cookieConsentChange', { detail: choice }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-2xl shadow-black/50 border border-white/10 animate-in fade-in zoom-in duration-300">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="w-16 h-16 bg-[#a30000]/10 rounded-2xl flex items-center justify-center">
            <span className="material-symbols-outlined text-[#a30000] text-4xl">
              privacy_tip
            </span>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sua Privacidade
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Utilizamos cookies para melhorar a sua experiência e suportar funcionalidades externas. 
              Escolha como deseja continuar para habilitar todos os recursos do site.
            </p>
          </div>

          <div className="flex flex-col w-full gap-3 pt-2">
            <button
              onClick={() => handleConsent('accepted')}
              className="w-full h-14 rounded-2xl bg-[#a30000] text-white font-bold text-lg shadow-lg shadow-[#a30000]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Aceitar e Continuar
            </button>
            <button
              onClick={() => handleConsent('rejected')}
              className="w-full h-14 rounded-2xl bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 font-bold text-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-200"
            >
              Recusar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

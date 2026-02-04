import React from 'react'

export default function Location() {
  const address = "AV. 7, Av. Marcos Portugal, 2845-427 Amora"
  const mapQuery = encodeURIComponent(address)

  return (
    <div className="w-full max-w-md mt-4">
      <div className="bg-white dark:bg-[#2f1616] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-[#452222]">
        <iframe
          className="h-32 w-full"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Localização"
        />
        <div className="p-4 flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-sm">Amora, Portugal</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

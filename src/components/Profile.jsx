import React from 'react'

export default function Profile() {
  return (
    <>
      <div className="relative group">
        <img
          src="/logo.svg"
          alt="Mapreti Studio Logo"
          className="h-48 object-contain"
        />
      </div>
      <div className="text-center space-y-2 max-w-md">
        <p className="text-gray-600 dark:text-gray-300 text-base font-normal">
          Serviços de manicure profissional com qualidade e carinho.
        </p>
      </div>
      <div className="w-full max-w-sm pt-2">
        <button className="w-full flex cursor-pointer items-center justify-center rounded-full h-14 px-6 bg-[#a30000] text-white gap-3 text-lg font-bold shadow-lg shadow-[#a30000]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#a30000]/40 hover:scale-105 hover:brightness-110">
          <span className="material-symbols-outlined text-white text-[24px]">calendar_month</span>
          <span>Agendar Horário</span>
        </button>
      </div>
    </>
  )
}

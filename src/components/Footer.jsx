import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col items-center gap-4 mt-8 pb-8">
      <a
        className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        href="https://www.instagram.com/mapretti.studio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-[28px]">photo_camera</span>
      </a>
      <p className="text-xs text-gray-400 dark:text-gray-500">
        © {currentYear} Mapreti Studio. Todos os direitos reservados.
      </p>
    </div>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <div className="flex gap-6 mt-8 pb-8">
      <a className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">
        <span className="material-symbols-outlined text-[28px]">mail</span>
      </a>
      <a className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">
        <span className="material-symbols-outlined text-[28px]">photo_camera</span>
      </a>
      <a className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">
        <span className="material-symbols-outlined text-[28px]">public</span>
      </a>
    </div>
  )
}

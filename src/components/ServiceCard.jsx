import React from 'react'

export default function ServiceCard({ title, description, price }) {
  return (
    <div className="bg-white dark:bg-[#2f1616] rounded-lg p-5 shadow-sm border border-gray-100 dark:border-[#452222] flex flex-col gap-2 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <span className="font-bold text-gray-800 dark:text-gray-100 text-lg">{title}</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      <div className="mt-2 text-right">
        <span className="inline-block bg-background-light dark:bg-[#3d1d1d] px-3 py-1 rounded-md text-primary font-bold text-sm">{price}</span>
      </div>
    </div>
  )
}

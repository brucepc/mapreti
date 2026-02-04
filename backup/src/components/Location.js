import React from 'react'

export default function Location() {
  return (
    <div className="w-full mt-4">
      <div className="bg-white dark:bg-[#2f1616] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-[#452222]">
        <div 
          className="h-32 w-full bg-cover bg-center" 
          data-alt="Map view of London city streets" 
          data-location="London" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZHk-O-tCFaNK137rCPc5jxreLW77ubNm3_D4iCH58P36_lh8Fvq6mo1KluF6GApKOj8TzkJQ4LxumKofvtM8rEY7g49mHcKKaFUJrMBB3VelS3w3SRJc8s9j32coHdzgKHqWujLHl7CUx8lmjGIhDwuZbfyZMYDltxU9AvObHzIMwLgOovtzqP3SfE1qazsaCPpYoDoCOY-4K2LNQtNKXKUNBmUrLUzG2Izn2c9NoVDrcaRSOgq_SRA_RbdwJ5Rd5DEURxx5iFLY")' }}
        >
        </div>
        <div className="p-4 flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-sm">Based in London, UK</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Available for remote work worldwide</p>
          </div>
        </div>
      </div>
    </div>
  )
}

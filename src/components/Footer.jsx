import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-[200px]'>
        <footer className="bg-gray-700 text-white py-4">
            <div className="container mx-auto flex justify-center items-center gap-3 text-center">
                <a href="https://github.com/AgusMolinaCode" target="_blank" rel="noopener noreferrer"><FaGithub size={28} /></a>
                <h2 className='font-formula'>©2023 Agustin Molina</h2> 
                <a href="https://www.linkedin.com/in/agustin-molina-994635138/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
            </div>
        </footer>
    </div>
  )
}

export default Footer
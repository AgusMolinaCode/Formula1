import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ backgroundImage }) => {
  return (
    <motion.div
      className="w-1/2 h-[25rem] p-6 relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="h-full w-full bg-cover m-2 bg-center opacity-75"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
        <p className="text-lg font-medium">Card Title</p>
        <p className="text-gray-600">Card description</p>
      </div>
    </motion.div>
  )
}

const CardGrid = () => {
  return (
    <div className="flex flex-wrap ">
      <Card backgroundImage="https://www.formula1.com/content/fom-website/en/teams/Mercedes/_jcr_content/logo.img.jpg/1582638425211.jpg" />
      <Card backgroundImage="https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/logo.img.jpg/1644831223911.jpg" />
      <Card backgroundImage="https://www.formula1.com/content/fom-website/en/teams/Ferrari/_jcr_content/logo.img.jpg/1521797474166.jpg" />
    </div>
  )
}

export default CardGrid

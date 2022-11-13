import React from 'react'
import Qrcode from './assets/image-qr-code.png'

export default function App() {
  return (
    <div className='w-full h-screen bg-light-gray flex items-center justify-center font-outfit'>
      <div className='max-w-sm h-3/4 bg-white-csm p-5 mx-auto flex flex-col gap-5 items-center rounded-2xl shadow-lg'>
        <img src={Qrcode} alt="qr-code" className='rounded-xl' style={{width:320}}/>
        <h1 className='text-center font-bold text-2xl mt-4 max-w-[300px]'>Improve your front-end skills by building projects</h1>
        <p className='text-center max-w-[250px]'>Scan the QR code to visit Frontend Mentor adn take your coding skills to the next level</p>
      </div>
    </div>
  )
}

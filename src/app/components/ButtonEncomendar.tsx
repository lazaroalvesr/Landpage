'use client'

import Link from 'next/link'
import React, { FormEvent } from 'react'
import { ImCheckboxChecked } from 'react-icons/im';

function ButtonEncomendar() {

  const handleWhatsAppLink = (e: FormEvent) => {
    e.preventDefault();
    const phoneNumber = '5533999267947';
    const message = encodeURIComponent('Olá, tudo bem? Vim pelo site e gostaria de solicitar um orçamento.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
  }


  return (
    <div>
      <div>
        <button className='h-14 p-3 bg-blue-500 rounded-md mt-9 hover:scale-105 transition-transform'>
          <Link onClick={handleWhatsAppLink} href="WhatsApp" className='text-gray-50 flex ml-2 lg:text-2xl'>
            <span className='pr-2 mt-1'><ImCheckboxChecked color='#00ffff' /></span>
            Sim! Eu quero fazer um orçamento.</Link>
        </button>
      </div>
    </div>
  )
}

export default ButtonEncomendar
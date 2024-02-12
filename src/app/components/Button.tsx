import Link from 'next/link'
import React, { FormEvent } from 'react'

function Button() {
  const handleWhatsAppLink = (e: FormEvent) => {
    e.preventDefault();
    const phoneNumber = '5533999267947';
    const message = encodeURIComponent('Olá, Tudo bem? vim pelo site e gostaria de fazer um orçamento!');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
  }

  return (
    <div>
      <div>
        <Link className='w-60 text-center mt-6 lg:ml-2 ml-8 text-white p-4 rounded-md bg-blue-500' href="WhatsApp" onClick={handleWhatsAppLink}>
          Encomende a sua!
        </Link>
      </div>
    </div>
  )
}

export default Button
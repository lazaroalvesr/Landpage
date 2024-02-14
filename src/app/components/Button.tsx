import Link from 'next/link'
import React, { FormEvent } from 'react'

interface WhatsAppProps {
  itemName: string;
}

function WhatsAppButton({ itemName }: WhatsAppProps) {
  const handleWhatsAppLink = (e: FormEvent) => {
    e.preventDefault();
    const phoneNumber = '5519974105318';
    const message = encodeURIComponent(`Olá, tudo bem? Vim pelo site e gostaria de solicitar um orçamento para a ${itemName}. Obrigado!`); // Usando o itemName fornecido
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
  }

  return (
    <div>
      <div>
        <Link className='w-60 text-center mt-6 lg:ml-2 ml-8 text-white p-4 rounded-md bg-blue-500' href="WhatsApp" target='_blank' onClick={handleWhatsAppLink}>
          Encomende a sua!
        </Link>
      </div>
    </div>
  )
}

export default WhatsAppButton;

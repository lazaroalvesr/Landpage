import Link from 'next/link';
import React from 'react';
import { ImCheckboxChecked } from 'react-icons/im';

function ButtonEncomendar() {
  const message = 'Olá, tudo bem? Vim pelo site Arruda Bombas e gostaria de solicitar um orçamento.';
  const whatsappLink = `https://api.whatsapp.com/send?phone=5519974105318&text=${encodeURIComponent(message)}`;

  return (
    <div>
      <div>
        <Link href={whatsappLink} className='h-14 p-3 lg:w-[370px] w-72 bg-blue-500 rounded-md mt-9 hover:scale-105 transition-transform flex items-center' target='_blank' rel='noopener noreferrer'>
          <span className='pr-2'><ImCheckboxChecked color='#00ffff' /></span>
          <span className='text-gray-50 flex ml-2 lg:text-3xl text-xl'>Fazer um orçamento</span>
        </Link>
      </div>
    </div>
  );
}

export default ButtonEncomendar;

import Link from 'next/link';
import React from 'react';
import { ImCheckboxChecked } from 'react-icons/im';


interface ButtonProps {
  itemName: string;
}

function ButtonEncomendar({ itemName }: ButtonProps) {
  const message = `Olá, tudo bem? Vim pelo site Arruda Bombas e gostaria de solicitar um orçamento da ${itemName}.`;
  const whatsappLink = `https://api.whatsapp.com/send?phone=5519974105318&text=${encodeURIComponent(message)}`;

  return (
    <div>
      <div>
        <Link href={whatsappLink} className='w-60 text-center mt-6 lg:ml-2 ml-8 text-white p-4 rounded-md bg-blue-500 cursor-pointer' target='_blank' rel='noopener noreferrer'>
          Encomende a sua
        </Link>
      </div>
    </div>
  );
}

export default ButtonEncomendar;

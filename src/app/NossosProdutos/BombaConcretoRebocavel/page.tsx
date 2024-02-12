'use client'

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { TiInputChecked } from "react-icons/ti";


function NossosProdutos() {
  const [imagemPrincipal, setImagemPrincipal] = useState('/img/BombaRebocavel_1.jpg');

  const handleThumbnailClick = (novaImagem: string) => {
    setImagemPrincipal(novaImagem);
  };

  const imagensGaleria = [
    '/img/BombaRebocavel_1.jpg',
    '/img/BombaRebocavel_2.jpg',
    '/img/BombaRebocavel_3.jpg',
    '/img/BombaRebocavel_4.jpg',
  ];

  const handleWhatsAppLink = (e: FormEvent) => {
    e.preventDefault();
    const phoneNumber = '5533999267947';
    const message = encodeURIComponent('Olá! Vim pelo site Arruda Bombas.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
  }

  return (
    <section className='max-w-5xl m-auto mt-20'>
      <div className='grid lg:grid-cols-2 grid-cols-1 ml-9 lg:ml-0 gap-12'>
        <div className='mt-24'>
          <div className='lg:w-[600px] w-96 lg:-ml-28 -ml-8'>
            <Image
              src={imagemPrincipal}
              alt="Bomba de concreto rebocavel"
              width={800}
              height={90}
              className=''
            />
          </div>
          <div className=" lg:-ml-16 grid grid-cols-4 -ml-4 gap-6  mt-4">
            {imagensGaleria.map((imagem, index) => (
              <div className=' border -ml-4 lg;-ml-0 w-20 lg:w-32 border-black p-2 rounded-md' key={index} onClick={() => handleThumbnailClick(imagem)}>
                <Image
                  src={imagem}
                  alt={`Imagem ${index + 1}`}
                  width={80}
                  height={90}
                  className="cursor-pointer ml-3 lg:w-20 w-14"
                />
              </div>
            ))}
          </div>
        </div>
        <div className='mt-12'>
          <div>
            <h1 className='text-3xl font-semibold'>Carretinha Rebocável</h1>
          </div>
          <ul className='ml-0 mt-6'>
            <li className='flex text-xl'><span className='pr-2'><TiInputChecked size={25} /></span>200 bar de pressão</li>
            <li className='flex text-xl'><span className='pr-2'  ><TiInputChecked size={25} /></span>Camisa 180 de diâmetro</li>
            <li className='flex text-xl'><span className='pr-2'  ><TiInputChecked size={25} /></span>0.75 de comprimento</li>
            <li className='flex text-xl'><span className='pr-2'  ><TiInputChecked size={25} /></span>Pistão 0.75 de comprimento</li>
            <li className='flex text-xl'><span className='pr-2 ' ><TiInputChecked size={25} /></span>Potência equivalente a P500</li>
            <li className='flex text-xl'><span className='pr-2'  ><TiInputChecked size={25} /></span>Bombeamento horizontal 100 metros</li>
            <li className='flex text-xl'><span className='pr-2'  ><TiInputChecked size={25} /></span>20 metros vertical</li>
            <li className='flex text-xl'><span className='pr-2'  ><TiInputChecked size={25} /></span>Brita 0 e 1</li>
            <li className='flex text-xl'><span className='pr-2'  ><TiInputChecked size={25} /></span>Coxo com sistema tubo S</li>
            <li className='flex text-xl'><span className='pr-2'  ><TiInputChecked size={25} /></span>Painel PP</li>
            <li className='flex text-xl'><span className='pr-2' ><TiInputChecked size={25} /></span>Sistema de bombeamento automatizado</li>
            <li className='flex text-xl'><span className='pr-2'  ><TiInputChecked size={25} /></span>Radiador de óleo</li>
            <li className='flex text-xl'><span className='pr-2 ' ><TiInputChecked size={25} /></span>Capacidade 25 cúbicos por hora</li>
          </ul>
          <div className='flex lg:flex-row flex-col'>
            <button className='w-72 text-xl font-semibold border border-gray-900 p-2 rounded-md mt-6'>
              R$ 170.000,00
            </button>
            <Link className='w-60 text-center mt-6 lg:ml-2 ml-8 text-white p-4 rounded-md bg-blue-500' href="WhatsApp" onClick={handleWhatsAppLink}>
              Encomende a sua!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NossosProdutos;

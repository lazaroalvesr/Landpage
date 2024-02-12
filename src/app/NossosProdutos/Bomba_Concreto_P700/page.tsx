'use client'

import Button from '@/app/components/Button';
import Items from '@/app/components/Items';
import Image from 'next/image';
import { useState } from 'react';


function NossosProdutos() {
  const [imagemPrincipal, setImagemPrincipal] = useState('/img/img_pagina_inicial/BombaConcreto_P700.png');

  const items = [
    "200 bar de pressão",
    "Camisa 1.20 de comprimento",
    "Camisa 180 de diâmetro",
    "Pistão 1.20 de comprimento",
    "Potência equivalente a P500",
    "Bombeamento horizontal 80 metros",
    "12 metros vertical",
    "Brita 0 e 1",
    "Coxo com sistema tubo S",
    "Painel PP",
    "Sistema de bombeamento automatizado",
    "Radiador de óleo",
    "Capacidade 35 cúbicos por hora"
  ];


  const handleThumbnailClick = (novaImagem: string) => {
    setImagemPrincipal(novaImagem);
  };

  const imagensGaleria = [
    '/img/img_pagina_inicial/BombaConcreto_P700.png',
  ];


  return (
    <section className='max-w-5xl m-auto mt-20'>
      <div className='grid lg:grid-cols-2 grid-cols-1 ml-9 lg:ml-0 gap-12'>
        <div className='mt-24'>
          <div className='lg:w-[600px]'>
            <Image
              src={imagemPrincipal}
              alt="P 700"
              width={300}
              height={90}
              className=''
            />
          </div>
          <div className=" lg:-ml-16 grid grid-cols-4  gap-4 mt-4">
            {imagensGaleria.map((imagem, index) => (
              <div className=' border  border-black p-2 rounded-md' key={index} onClick={() => handleThumbnailClick(imagem)}>
                <Image
                  src={imagem}
                  alt={`Imagem ${index + 1}`}
                  width={80}
                  height={90}
                  className="cursor-pointer ml-3"
                />
              </div>
            ))}
          </div>
        </div>
        <div className='mt-12'>
          <div>
            <h1 className='text-3xl font-semibold'>P 700</h1>
          </div>
          <ul className='ml-0 mt-6'>
            {items.map((items) => (
              <Items key={items} items={items} />
            ))}
          </ul>
          <div className='flex lg:flex-row flex-col'>
            <button className='w-72 text-xl font-semibold border border-gray-900 p-2 rounded-md mt-6'>
              R$ 150.000,00
            </button>
            <div className='mt-9'>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NossosProdutos;

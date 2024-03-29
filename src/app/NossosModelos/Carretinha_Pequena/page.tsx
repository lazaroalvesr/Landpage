'use client'

import Button from '@/app/components/Button';
import Items from '@/app/components/Items';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { useState } from 'react';
import Head from '@/app/components/Head';

function NossosProdutos() {
  const [imagemPrincipal, setImagemPrincipal] = useState('/img/img_pagina_inicial/BombaConcreto_Carretinha_pequena.png');

  const items = [
    "200 bar de pressão",
    "Camisa 0.60 de comprimento",
    "150 de diâmetro",
    "Pistão 0.60 de comprimento",
    "Bombeamento horizontal 40 metros",
    "6 metros vertical",
    "Brita 0 e 1",
    "Coxo com sistema tubo S",
    "Painel PP",
    "Sistema de bombeamento automatizado",
    "Radiador de óleo",
    "Motor elétrico 220 v",
    "Capacidade 5 cúbicos por hora"
  ];


  const handleThumbnailClick = (novaImagem: string) => {
    setImagemPrincipal(novaImagem);
  };

  const imagensGaleria = [
    '/img/img_pagina_inicial/BombaConcreto_Carretinha_pequena.png',
    '/img/Carretinha_Pequena/carretinha_pequena_02.jpg',
    '/img/Carretinha_Pequena/carretinha_pequena_01.jpg',
    '/img/Carretinha_Pequena/carretinha_pequena_02.jpg',
    '/img/Carretinha_Pequena/carretinha_pequena_03.jpg',
    '/img/Carretinha_Pequena/carretinha_pequena_04.jpg',
  ];

  return (
    <section className='max-w-5xl m-auto mt-20'>
      <Head title="Carretinha pequena | Arruda Bombas" />
      <div className='grid lg:grid-cols-2 grid-cols-1 ml-9 lg:ml-0 gap-12'>
        <div className='mt-24'>
          <div className='lg:w-[600px] w-80'>
            <Image
              src={imagemPrincipal}
              alt="Carretinha pequena"
              width={440}
              height={90}
              className=''
            />
          </div>
          <div className=" lg:-ml-16 grid-cols-3 grid lg:grid-cols-4 gap-4 mt-4">
            {imagensGaleria.map((imagem, index) => (
              <div className=' -ml-2 w-24 p-4 lg:w-32 lg:-ml-0 border border-black lg:p-2 rounded-md' key={index} onClick={() => handleThumbnailClick(imagem)}>
                <Image
                  src={imagem}
                  alt={`Imagem ${index + 1}`}
                  width={80}
                  height={90}
                  className="cursor-pointer lg:ml-3 -ml-1"
                />
              </div>
            ))}
          </div>
        </div>
        <div className='mt-12'>
          <div>
            <h1 className='text-3xl font-semibold'>Carretinha pequena</h1>
          </div>
          <ul className='ml-0 mt-6'>
            {items.map((items, index) => (
              <Items key={uuidv4()} items={items} />
            ))}
          </ul>
          <div className='flex lg:flex-row flex-col ml-8 lg:ml-0'>
            <button className='w-72 text-xl font-semibold border border-gray-900 p-2 rounded-md mt-6'>
              R$ 115.000,00
            </button>
            <div className='mt-9 ml-7 lg:ml-0'>
              <Button itemName='Bomba de Concreto Carretinha pequena' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NossosProdutos;

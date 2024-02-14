'use client'

import Button from '@/app/components/Button';
import Items from '@/app/components/Items';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { useState } from 'react';


function NossosProdutos() {
  const [imagemPrincipal, setImagemPrincipal] = useState('/img/Bomba_P700/P700_1.jpg');

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
    '/img/Bomba_P700/P700_1.jpg',
    '/img/Bomba_P700/P700_2.jpg',
    '/img/Bomba_P700/P700_3.jpg',
    '/img/Bomba_P700/P700_4.jpg',
    '/img/Bomba_P700/P700_5.jpg',
    '/img/Bomba_P700/P700_6.jpg',
  ];


  return (
    <section className='max-w-5xl m-auto mt-20'>
      <div className='grid lg:grid-cols-2 grid-cols-1 ml-9 lg:ml-0 gap-12'>
        <div className='mt-24'>
          <div className='lg:w-[750px] -ml-6 pr-2 lg:pr-2 lg:-ml-28'>
            <Image
              src={imagemPrincipal}
              alt="P 700"
              width={590}
              height={90}
              className=''
            />
          </div>
          <div className=" lg:-ml-28 grid lg:grid-cols-4 grid-cols-3  gap-4 mt-4">
            {imagensGaleria.map((imagem, index) => (
              <div className=' w-24 lg:w-32 p-2 border  border-black lg:p-2 rounded-md' key={index} onClick={() => handleThumbnailClick(imagem)}>
                <Image
                  src={imagem}
                  alt={`Imagem ${index + 1}`}
                  width={80}
                  height={90}
                  className="cursor-pointer lg:ml-5 "
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
            {items.map((items, index) => (
              <Items key={uuidv4()} items={items} />
            ))}
          </ul>
          <div className='flex lg:flex-row flex-col ml-8 lg:ml-0'>
            <button className='w-72 text-xl font-semibold border border-gray-900 p-2 rounded-md mt-6'>
              R$ 150.000,00
            </button>
            <div className='mt-9 ml-7 lg:ml-0'>
              <Button itemName='Bomba de Concreto P700' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NossosProdutos;

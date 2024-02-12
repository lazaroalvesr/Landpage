'use client'

import Image from 'next/image'
import Link from 'next/link';
import { FormEvent } from 'react';
import { ImCheckboxChecked } from "react-icons/im";
import ButtonEncomendar from './ButtonEncomendar';


function Main() {

  return (
    <div>
      <div className='relative'>
        <div className='absolute bg-gray-900/60 w-full h-[690px] lg:h-[700px]'>
          <div className='flex lg:flex-row flex-col m-auto justify-center gap-44 lg:ml-32'>
            <div className='max-w-4xl lg:mt-32 mt-8 ml-3'>
              <div className='lg:w-[510px]'>
                <h1 className='text-gray-50 lg:text-5xl text-2xl'><span className='text-blue-400'>Bomba de Concreto de Alta Performance</span>: Elevando o Padrão da sua Construção!</h1>
                <p className='text-gray-50 lg:pt-8 pt-12 pb-4 lg:pb-0 w-80 lg:w-[470px]'>A transformação começa aqui! Com nossa Bomba de Concreto, da base ao acabamento, asseguramos a excelência para uma construção segura e duradoura.</p>
              </div>
              <ButtonEncomendar />
              <div>
                <Link href="/img/Catálogo Arrudas_Bombas.pdf" >
                  <button className='bg-blue-500 rounded-md text-gray-50 p-4 w-72 mt-4'>Baixe nosso Catálogo</button>
                </Link>
              </div>
            </div>
            <div className='max-w-4xl lg:mt-56 -mt-32'>
              <ul className='lg:ml-0 ml-4'>
                <li className='flex text-gray-50 text-xl pb-2'>
                  <span className='pr-2 mt-1'><ImCheckboxChecked color='#00ffff' /></span>
                  Garantia de qualidade
                </li>
                <li className='flex text-gray-50 text-xl pb-2'>
                  <span className='pr-2 mt-1'><ImCheckboxChecked color='#00ffff' /></span>
                  Clientes satisfeitos
                </li>

                <li className='flex text-gray-50 text-xl lg:w-96'>
                  <span className='pr-2 mt-1'><ImCheckboxChecked color='#00ffff' /></span>
                  Somos Especialistas na construção de Bomba De concreto usinado
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full h-screen '>
          <Image
            src="/img/img_banner.png"
            alt='Imagem pessoas espalhando concreto no chão'
            width={900}
            height={400}
            className='w-full h-full object-cover'
          />
        </div>

      </div>
    </div>
  )
}

export default Main
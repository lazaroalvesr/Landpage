import React from 'react'
import ButtonEncomendar from './ButtonEncomendar'
import Image from 'next/image'

function Demonstracao() {
  return (
    <section>
      <div className='max-w-4xl m-auto lg:mt-66 mt-40 '>
        <div className='text-center'>
          <h1 className='lg:text-4xl text-2xl w-[340px] md:w-full lg:w-full'><span className='text-blue-500'>Solidez Sob Encomenda</span> Bombas de Concreto Adaptadas para Cada Etapa de sua Obra</h1>
        </div>
        <div className='flex lg:flex-row md:flex-row flex-col ml-8 lg:ml-12 md:gap-12 lg:gap-12 mt-12 justify-center'>
          <div className='lg:w-[440px] h-72 '>
            <Image
              src="/img/img_pagina_inicial/Bomba_Concreto_04.jpg"
              alt='Bomba de concreto com 2 Betoneira'
              width={350}
              height={120}
            />
          </div>
          <div className='lg:w-[440px] h-72 '>
            <Image
              src="/img/img_pagina_inicial/BetomBomba2.png"
              alt='Bomba de concreto Betonbomba'
              width={320}
              height={120}
            />
          </div>
        </div>
        <div className='lg:ml-72 ml-12 md:ml-72 md:mt-24 lg:mt-0 mt-10'>
          <ButtonEncomendar />
        </div>
        <div className='max-w-xl m-auto w-12 flex lg:gap-32 justify-center gap-16 ml-[116px] lg:ml-96 mt-12 md:ml-60'>
          <div className='flex items-center  w-12'>
            <Image
              src="/img/seguro.png"
              alt='Compra Segura'
              width={35}
              height={14}
            />
            <p className='text-sm pl1'>Compra Segura</p>
          </div>
          <div className='flex items-center w-12'>
            <Image
              src="/img/fita.png"
              alt='Satisfação Garantida'
              width={35}
              height={14}
            />
            <p className='text-sm pl-1'>Satisfação Garantida</p>
          </div>
          <div className='flex items-center w-12'>
            <Image
              src="/img/privacidade.png"
              alt='Privacidade Protegida'
              width={35}
              height={14}
            />
            <p className='text-sm pl-1'>Privacidade Protegida</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demonstracao
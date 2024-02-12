import React from 'react'
import ButtonEncomendar from './ButtonEncomendar'
import Image from 'next/image'

function Demonstracao() {
  return (
    <section>
      <div className='max-w-4xl m-auto lg:mt-72 mt-40 '>
        <div className='text-center'>
          <h1 className='text-4xl'><span className='text-blue-500'>Solidez Sob Encomenda</span> Bombas de Concreto Adaptadas para Cada Etapa de sua Obra</h1>
        </div>
        <div className='flex lg:flex-row flex-col ml-12 lg:ml-0 gap-12 mt-12 justify-center'>
          <div className='w-72 h-72 bg-red-600'></div>
          <div className='w-72 h-72 bg-red-600'></div>
        </div>
        <div className='lg:ml-56 ml-12'>
          <ButtonEncomendar />
        </div>
        <div className='max-w-xl m-auto w-12  flex lg:gap-32 gap-20 ml-2 lg:ml-56 mt-12'>
          <div className='flex items-center w-12'>
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
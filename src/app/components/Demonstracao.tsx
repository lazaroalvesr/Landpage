import Image from 'next/image'
import React from 'react'

function Demonstracao() {
  return (
    <section>
      <div className='max-w-4xl m-auto lg:mt-28 md:-mt-72 -mt-28 flex lg:flex-row flex-col gap-40'>
        <div className='lg:w-[400px] text-center'>
          <h1 className='lg:text-4xl text-3xl lg:w-[400px] '><span className='text-blue-500'>EXCELÊNCIA GARANTIDA</span> BOMBAS DE CONCRETO PARA OBRAS DE QUALIDADE</h1>
          <p className='pt-12 text-2xl'>Bomba de Concreto</p>
          <p className='lg:w-[550px] md:w-[700px] pt-12 w-[370px] m-auto  ml-4 md:ml-20 pl-2 pr-2 lg:-ml-20 lg:pl-0 lg:pr-0 md:text-2xl lg:text-base sm'>Somo uma empresa especializada na <span className='text-blue-500'>fabricação de bombas de
            concreto</span>, somos apaixonados pela inovação na
            construção civil. Nossa missão é fornecer equipamentos
            de bombeamento de alta qualidade para garantir a
            eficiência e o sucesso de seus projetos.
            Conte conosco para construir as bases sólidas
            necessárias para o crescimento e desenvolvimento de
            suas obras.
          </p>
        </div>
        <div>
          <div>
            <div className='lg:w-[620px] w-[340px] ml-7 md:ml-40 md:w-[620px] lg:ml-0'>
              <Image
                src="/img/img_pagina_inicial/Bomba_Demonstração.jpg"
                alt='Bomba P700'
                width={520}
                height={42}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demonstracao
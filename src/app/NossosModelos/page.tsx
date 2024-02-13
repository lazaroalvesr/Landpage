import React from 'react'
import ImgComponent from '../components/Img'
import ButtonImg from '../components/ButtonImg'
import Head from '../components/Head'


function NossosModelos() {
  return (
    <section className='max-w-5xl m-auto'>
      <div>
        <Head title="Nosso Modelos | Arruda Bombas" />
      </div>
      <div className='mt-12 grid lg:grid-cols-3  justify-center lg:gap-16 gap-8'>
        <div className='border border-gray-400 w-80 rounded-md'>
          <div className='m-auto p-4'>
            <div className='ml-14'>
              <ImgComponent
                img='/img/img_pagina_inicial/carretinha_rebocavel.png'
                alt='Carretinha Rebocável'
                width={170}
                height={120}
              />
            </div>
            <div className='ml-0'>
              <ButtonImg
                Titulo='Bomba de Concreto Rebocável'
                url='/NossosModelos/BombaConcretoRebocavel'
              />
            </div>
          </div>
        </div>

        <div className='border border-gray-400 w-80 rounded-md'>
          <div className='m-auto p-4'>
            <div className='ml-8'>
              <ImgComponent
                img='/img/img_pagina_inicial/BombaConcreto_Carretinha_pequena.png'
                alt='Bomba de Concreto Carretinha Pequena'
                width={235}
                height={120}
              />
            </div>
            <div className='mt-5'>
              <ButtonImg
                Titulo='Bomba de Concreto Carretinha Pequena'
                url='/NossosModelos/Carretinha_Pequena'
              />
            </div>
          </div>
        </div>

        <div className='border border-gray-400 w-80 rounded-md'>
          <div className='m-auto mt-16 p-4'>
            <div className='ml-0 w-[310px]'>
              <ImgComponent
                img='/img/img_pagina_inicial/P700_1.png'
                alt='Bomba de Concreto P700'
                width={390}
                height={120}
              />
            </div>
            <div className='mt-[120px]'>
              <ButtonImg
                Titulo='P700'
                url='/NossosModelos/Bomba_Concreto_P700'
              />
            </div>
          </div>
        </div>

        <div className='border border-gray-400 w-80 rounded-md'>
          <div className='m-auto mt-24 p-4'>
            <div className=' w-[300px]'>
              <ImgComponent
                img='/img/img_pagina_inicial/Bomba_Betoneira.png'
                alt='Bomba de Concreto com 2 Betoneira'
                width={420}
                height={120}
              />
            </div>
            <div className='mt-[76px]'>
              <ButtonImg
                Titulo='Bomba de Concreto com Betoneira'
                url='/NossosModelos/Bomba_Concreto_Betoneira'
              />
            </div>
          </div>
        </div>

        <div className='border border-gray-400 w-80 rounded-md'>
          <div className='m-auto mt-6 p-4'>
            <div className='ml-6'>
              <ImgComponent
                img='/img/img_pagina_inicial/BetomBomba.png'
                alt='Bomba de Concreto Betonbomba'
                width={240}
                height={120}
              />
            </div>
            <div>
              <ButtonImg
                Titulo='Bomba de Concreto Betonbomba'
                url='/NossosModelos/Bomba_BetonBomba'
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default NossosModelos
import React from 'react'
import ImgComponent from '../components/Img'
import ButtonImg from '../components/ButtonImg'


function NossosProdutos() {
  return (
    <section className='max-w-5xl m-auto'>
      <div className='mt-12 grid lg:grid-cols-3  justify-center gap-16 '>
        <div className='border border-gray-400 w-80 rounded-md'>
          <div className='m-auto p-4'>
            <div className='ml-14'>
              <ImgComponent
                img='/img/carretinha_rebocavel.png'
                alt='Carretinha Rebocável'

              />
            </div>
            <div className='ml-0'>
              <ButtonImg
                Titulo='Bomba de Conreto Rebocável'
                url='/NossosProdutos/BombaConcretoRebocavel'
              />
            </div>
          </div>
        </div>

        <div className='border border-gray-400 w-80 rounded-md'>
          <div className='m-auto p-4'>
            <div className='ml-14'>
              <ImgComponent
                img='/img/carretinha_rebocavel.png'
                alt='Carretinha Rebocável'

              />
            </div>
            <div className='ml-0'>
              <ButtonImg
                Titulo='Bomba de Conreto Rebocável'
                url='google.com'
              />
            </div>
          </div>
        </div>

        <div className='border border-gray-400 w-80 rounded-md'>
          <div className='m-auto p-4'>
            <div className='ml-14'>
              <ImgComponent
                img='/img/carretinha_rebocavel.png'
                alt='Carretinha Rebocável'

              />
            </div>
            <div className='ml-0'>
              <ButtonImg
                Titulo='Bomba de Conreto Rebocável'
                url='google.com'
              />
            </div>
          </div>
        </div>

        <div className='border border-gray-400 w-80 rounded-md'>
          <div className='m-auto p-4'>
            <div className='ml-14'>
              <ImgComponent
                img='/img/carretinha_rebocavel.png'
                alt='Carretinha Rebocável'

              />
            </div>
            <div className='ml-0'>
              <ButtonImg
                Titulo='Bomba de Conreto Rebocável'
                url='google.com'
              />
            </div>
          </div>
        </div>

        <div className='border border-gray-400 w-80 rounded-md'>
          <div className='m-auto p-4'>
            <div className='ml-14'>
              <ImgComponent
                img='/img/carretinha_rebocavel.png'
                alt='Carretinha Rebocável'

              />
            </div>
            <div className='ml-0'>
              <ButtonImg
                Titulo='Bomba de Conreto Rebocável'
                url='google.com'
              />
            </div>
          </div>
        </div>

        <div className='border border-gray-400 w-80 rounded-md'>
          <div className='m-auto p-4'>
            <div className='ml-14'>
              <ImgComponent
                img='/img/carretinha_rebocavel.png'
                alt='Carretinha Rebocável'

              />
            </div>
            <div className='ml-0'>
              <ButtonImg
                Titulo='Bomba de Conreto Rebocável'
                url='google.com'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NossosProdutos
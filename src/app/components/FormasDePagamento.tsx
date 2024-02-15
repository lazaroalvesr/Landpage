import Image from 'next/image'
import React from 'react'

function FormasDePagamento() {
  return (
    <section>
      <div className='max-w-4xl flex justify-center m-auto mt-40 lg:mt-60'>
        <div className='flex lg:flex-row flex-col md:flex-row lg:gap-72 gap-16'>
          <div>
            <h1 className='text-xl font-bold pb-4'>Formas de Pagamento</h1>
            <Image
              src="/img/transferencia.png"
              alt='Icone referindo a transferencia de dinheiro'
              width={20}
              height={12}
            />
          </div>
          <div>
            <h1 className='text-xl font-bold pb-4'>Duvidas</h1>
            <p className='text-xl'>Nossos meios de contato:</p>
            <p className='pt-2'>pedrohenriquearrudaa@gmail.com</p>
            <p>(19) 97410-5318</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormasDePagamento
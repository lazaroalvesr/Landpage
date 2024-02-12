import Image from 'next/image'
import React from 'react'

function FormasDePagamento() {
  return (
    <section>
      <div className='max-w-4xl flex justify-center m-auto mt-72'>
        <div className='flex lg:flex-row flex-col lg:gap-72 gap-20'>
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
            <p>Nossos meios de contato:</p>
            <p>suporte@gmail.com</p>
            <p>(11) 999-9999999</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormasDePagamento
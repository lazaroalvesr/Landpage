import Image from 'next/image';


function DuvidaEmpresa() {
  return (
    <div className='mt-32'>
      <div className='text-center'>
        <h1 className='text-3xl'>Em dúvida quanto à nossa empresa</h1>
        <p className='pt-5 text-xl'>Nossos Clientes</p>
        <div className='flex lg:flex-row md:flex-row  flex-col m-auto items-center justify-center gap-12 mt-20 lg:mt-32'>
          <div className='lg:w-56'>
            <Image
              src="/img/Clientes/Cliente_01.jpg"
              alt='Cliente'
              width={190}
              height={12}
            />
          </div>

          <div className='lg:w-56'>
            <Image
              src="/img/Clientes/Cliente_02.jpg"
              alt='Cliente'
              width={190}
              height={12}
            />
          </div>

          <div className='lg:w-56'>
            <Image
              src="/img/Clientes/Cliente_03.jpg"
              alt='Cliente'
              width={190}
              height={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DuvidaEmpresa;

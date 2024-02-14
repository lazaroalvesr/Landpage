import Image from 'next/image';
import Head from '../components/Head';


function DuvidaEmpresa() {

  return (
    <div className='mt-32'>
      <Head title="Nossos Clientes | Arruda Bombas" />
      <div className='text-center'>
        <p className='pt-5 text-3xl'>Nossos Clientes</p>
        <div className='flex m-auto items-center justify-center gap-12 mt-32'>
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

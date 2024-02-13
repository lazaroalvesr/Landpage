'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Slide {
  src: string;
  alt: string;
}

const slides: Slide[] = [
  { src: '/img/img_pagina_inicial/companhia.png', alt: 'Icone empresa 1' },
  { src: '/img/img_pagina_inicial/companhia.png', alt: 'Icone empresa 2' },
  { src: '/img/img_pagina_inicial/companhia.png', alt: 'Icone empresa 3' },
  { src: '/img/img_pagina_inicial/companhia.png', alt: 'Icone empresa 4' },
  { src: '/img/img_pagina_inicial/companhia.png', alt: 'Icone empresa 5' },
  { src: '/img/img_pagina_inicial/companhia.png', alt: 'Icone empresa 6' },
];

const slidesPerGroup = 5;

function DuvidaEmpresa() {
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prevGroup) => (prevGroup + 1) % Math.ceil(slides.length / slidesPerGroup));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mt-32'>
      <div className='text-center'>
        <h1 className='text-3xl'>Em dúvida quanto à nossa empresa</h1>
        <p className='pt-5 text-xl'>Nossos Clientes</p>
        <div className='lg:ml-[440px] ml-16 mt-44'>
          <div className='w-72 lg:w-full'>
            <div className='flex lg:gap-32 gap-4 overflow-hidden'>
              {slides
                .slice(currentGroup * slidesPerGroup, (currentGroup + 1) * slidesPerGroup)
                .map((slide, index) => (
                  <div
                    key={index}
                    className='slide transition-transform duration-500 transform hover:scale-110'
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <Image src={slide.src} alt={slide.alt} width={50} height={120} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DuvidaEmpresa;

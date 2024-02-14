'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, FormEvent } from "react";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Footer() {

  const [anoCriacao, setAnoCriacao] = useState("");
  const message = 'Olá, tudo bem? Vim pelo site Arruda Bombas e gostaria de solicitar um orçamento.';
  const whatsappLink = `https://api.whatsapp.com/send?phone=5519974105318&text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const obterAnoAtual = () => {
      const data = new Date();
      return data.getFullYear().toString();
    };

    setAnoCriacao(obterAnoAtual());
  }, []);

  return (
    <footer className=" pb-20 relative pt-32 text-center lg:pb-4 dark:text-gray-800 
    text-gray-900">
      <Link href={whatsappLink} target='_blank' rel='noopener noreferrer'>
        <div className=" lg:right-10 right-7 fixed bottom-8 bg-white rounded-xl w-15 ">
          <Image
            src="/img/Icone_Whatsapp.png"
            alt="Icone WhatsApp"
            width={56}
            height={10}
          />
        </div>
      </Link>
      <div>
        <p className="-pt-32">{anoCriacao} © Arruda Bombas | Todos os Direitos Reservados.</p>
        <p className="pt-4">Feito por |  <Link href="https://www.lazaroalvesr.com/" target="_blank">Lázaro Alves R</Link></p>
      </div>
    </footer>
  );
}

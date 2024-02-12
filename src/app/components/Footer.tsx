'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, FormEvent } from "react";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Footer() {
  const [anoCriacao, setAnoCriacao] = useState("");

  const handleWhatsAppLink = (e: FormEvent) => {
    e.preventDefault();
    const phoneNumber = '5519974105318';
    const message = encodeURIComponent('Olá, Tudo bem? vim pelo site Arruda Bombas e gostaria de fazer um orçamento!');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
  }

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
      <Link onClick={handleWhatsAppLink} href="WhatsApp">
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
        <p className="-pt-32">© {anoCriacao} <Link href="https://www.lazaroalvesr.com/" target="_blank">Lázaro Alves R</Link> | Todos os Direitos Reservados.</p>
      </div>
    </footer>
  );
}

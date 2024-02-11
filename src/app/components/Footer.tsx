'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Footer() {
  const [anoCriacao, setAnoCriacao] = useState("");

  useEffect(() => {
    const obterAnoAtual = () => {
      const data = new Date();
      return data.getFullYear().toString();
    };

    setAnoCriacao(obterAnoAtual());
  }, []);

  return (
    <footer className=" pb-20 pt-32 text-center lg:pb-4 dark:text-gray-800 
    text-gray-900   ">
      <p className="-pt-32">© {anoCriacao} <Link href="https://www.lazaroalvesr.com/" target="_blank">Lázaro Alves R</Link> | Todos os Direitos Reservados.</p>
    </footer>
  );
}

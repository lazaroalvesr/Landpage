'use client'

import React, { useEffect } from "react";

interface HeadProps {
  title: string;
}

const Head: React.FC<HeadProps> = (props) => {
  useEffect(() => {
    document.title = props.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', props.title);
    }
  }, [props.title]);

  return null; // O componente Head não precisa retornar nenhum conteúdo, então retorna null
}

export default Head;

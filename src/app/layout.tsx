import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arruda Bombas",
  description: "Descubra a excelência em bombas de concreto usinado com a Arruda Bombas.Líderes na indústria de construção, fornecemos soluções de bombeamento de concreto confiáveis e inovadoras para projetos de qualquer escala.Conte com nossa qualidade superior e serviço ao cliente excepcional para elevar o sucesso de sua obra."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-BR">
      <head>
        <link rel="shortcut icon" href="/img/icone10.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

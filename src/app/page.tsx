import Main from "@/app/components/Main";
import Demonstracao from "./components/Demonstracao";
import Infos from './components/Infos'
import DuvidaEmpresa from "./components/DuvidaEmpresa";
import FormasDePagamento from "./components/FormasDePagamento";

export default function Home() {
  return (
    <>
      <Main />
      <Demonstracao />
      <Infos />
      <DuvidaEmpresa />
      <FormasDePagamento />
    </>
  );
}

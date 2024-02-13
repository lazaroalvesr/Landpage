import Main from "@/app/components/Main";
import Demonstracao from "./components/Demonstracao";
import Infos from './components/Infos'
import DuvidaEmpresa from "./components/DuvidaEmpresa";
import FormasDePagamento from "./components/FormasDePagamento";
import { Video } from "./components/Video";

export default function Home() {
  return (
    <>
      <Main />
      <Demonstracao />
      <Video />
      <Infos />
      <DuvidaEmpresa />
      <FormasDePagamento />
    </>
  );
}

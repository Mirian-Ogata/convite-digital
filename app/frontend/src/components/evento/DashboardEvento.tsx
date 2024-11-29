import { Convidado, Evento } from "core";
import InformacoesEvento from "./InformacoesEvento";
import AcessarViaQrCode from "./AcessarViaQrCode";
import Estatisticas from "../shared/Estatisticas";
import ListaConvidados from "./ListaConvidados";

export interface DashboardEventoProps {
  evento: Evento;
  presentes: Convidado[];
  ausentes: Convidado[];
  totalGeral: number;
}

export default function DashboardEvento(props: DashboardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEvento evento={props.evento} className="flex-1" />
        <AcessarViaQrCode evento={props.evento} />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-6">
        <Estatisticas
          texto="Expectativa de Convidados:"
          valor={props.evento.publicoEsperado}
          imagem="/icones/convidados.svg"
        />
        <Estatisticas
          texto="Confirmações:"
          valor={props.presentes.length}
          imagem="/icones/confirmados.svg"
        />
        <Estatisticas
          texto="Total Confirmado:"
          valor={props.totalGeral}
          imagem="/icones/acompanhantes.svg"
        />
      </div>

      <button className="botao azul mt-12 self-end">
        <span>Atualizar Lista de Convidados</span>
      </button>
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram PRESENÇA
      </span>
      <ListaConvidados convidados={props.presentes} />
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram AUSÊNCIA
      </span>
      <ListaConvidados convidados={props.ausentes} />
    </div>
  );
}

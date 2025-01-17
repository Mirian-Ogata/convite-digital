import { Evento } from "core";
import Informacao from "../shared/Informacao";

export interface InformacoesEventoProps {
  evento: Evento;
  className?: string;
}

export default function InformacoesEvento(props: InformacoesEventoProps) {
  const { evento } = props;
  return (
    <div className={`$(props.className ? "") flex flex-1 flex-col gap-2`}>
      <div className="flex flex-1 items-center gap-4 rounded-lg border border-zinc-800 px-6 py-3">
        <span className="text-2xl font-black">{evento.alias}: </span>
        <span className="text-xl text-zinc-300">{evento.nome}</span>
      </div>
      <div className="flex gap-2">
        <Informacao label="Data:">
          <span>
            {new Date(evento.data!).toLocaleDateString()}
            {" às "}
            {new Date(evento.data!).toLocaleTimeString()}
          </span>
        </Informacao>
        <Informacao label="Local:">{evento.local}</Informacao>
      </div>
      <Informacao label="Descrição:">{evento.descricao}</Informacao>
    </div>
  );
}

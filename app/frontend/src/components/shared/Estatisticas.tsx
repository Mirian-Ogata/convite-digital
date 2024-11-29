import Image from "next/image";

export interface EstatisticasProps {
  texto: string;
  valor: any;
  imagem: string;
}

export default function Estatisticas(props: EstatisticasProps) {
  return (
    <div className="flex items-center gap-5 rounded-lg bg-zinc-900 px-6 py-2.5">
      <div className="flex flex-1 flex-col">
        <span className="font-light text-zinc-400">{props.texto}</span>
        <span className="text-2xl font-black">{props.valor}</span>
      </div>
      <Image src={props.imagem} width={80} height={80} alt="ícone" />
    </div>
  );
}

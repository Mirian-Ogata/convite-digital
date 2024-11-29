export interface InformacaoProps {
  label: string;
  children: any;
}

export default function Informacao(props: InformacaoProps) {
  return (
    <div className="flex flex-1 flex-col items-start rounded-lg border border-zinc-800 px-6 py-3">
      <span className="font-bold text-zinc-400">{props.label}</span>
      <div className="text-xl">{props.children}</div>
    </div>
  );
}

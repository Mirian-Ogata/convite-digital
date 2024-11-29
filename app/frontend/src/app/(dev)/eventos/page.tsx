import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
import { eventos } from "core";

export default function PaginaEventos() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className="w-ful flex flex-col overflow-hidden rounded-lg bg-zinc-800"
        >
          <div className="relative h-52 w-full">
            <Image
              src={evento.imagem}
              fill
              alt={evento.nome}
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col items-center gap-5 p-7 text-center">
            <span className="text-lg font-black">{evento.nome}</span>
            <p className="flex-1 text-sm text-zinc-400">{evento.descricao}</p>
            <QRCode
              value={JSON.stringify({ id: evento.id, senha: evento.senha })}
              className="h-44 w-44"
            />
            <div className="flex gap-5">
              <Link
                href={`/evento/admin/${evento.id}/${evento.senha}`}
                className="botao vermelho flex-1"
              >
                Admin
              </Link>
              <Link
                href={`/convite/${evento.alias}`}
                className="botao verde flex-1"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

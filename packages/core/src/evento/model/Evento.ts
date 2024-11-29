import Convidado from "./Convidado";

export default interface Evento {
    id:string;
    alias: string; //aniversario-rebeca-2025
    nome: string;
    senha: string;
    data: Date;
    local:string;
    descricao: string;
    imagem: string;
    imagemBackground:string;
    publicoEsperado: number;
    convidados: Convidado[];
}
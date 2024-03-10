import IProfissional from "./IProfissional";

export default interface IConsulta extends IProfissional {
    id: number,
    data: string,
    horario: string,
    profissional: Array<IProfissional>, //recebendo o valor da outra interface IProfissional
    especialidade: string,
    paciente: string,
    modalidade: string
}
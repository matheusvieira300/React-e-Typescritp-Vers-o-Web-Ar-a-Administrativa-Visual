import IConsulta from "./types/IConsulta";
import useFetch from "./useFetch";

const useDadosConsulta = () => {
    return useFetch<IConsulta[]>({ url: 'consultas' }); //vai chamar o useFetch a função de conectar com a API
    // a partir do endpoint consultas e tudo que aparecer será no formato de IConsultas
}

export default useDadosConsulta;
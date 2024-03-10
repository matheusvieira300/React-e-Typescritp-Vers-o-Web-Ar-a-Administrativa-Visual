import IConsulta from "../../types/IConsulta";
import IProfissional from "../../types/IProfissional";

interface Props {
    profissionais: IProfissional[] | null,
    consultas: IConsulta[] | null
}

interface IDados {
    nome: string,
    consultas: number
}

const useDadosGrafico = ({ profissionais, consultas }: Props) => {
    let dados: Array<IDados> = []; // informando que é um arrya de nome e consultas

    if (profissionais && consultas) {
        dados = profissionais.map((profissional) => ({ //map cria um novo array a partir do resultado obtido
            nome: profissional.nome, // atribuindo o nome de dados ao nome de profissionais
            consultas: consultas.filter((consulta) => // atribuindo o consultas ao consultas e filtrando pelo nome do profissional pelo filter
                consulta.profissional.some((prof) => prof.nome === profissional.nome) // some: testa se ao menos um dos elementos no
                // array passa no teste implementado pela função atribuída. 

               
            ).length// lenght para pegar as consultas o número delas
        }))
    }

    return dados;
}

export default useDadosGrafico;
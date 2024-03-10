import { ResponsiveContainer } from "recharts";
import { Bar } from "recharts";
import { XAxis } from "recharts";//plano cartesiano
import { YAxis } from "recharts";
import { BarChart } from "recharts";
import styled from "styled-components";
import IConsulta from "../../types/IConsulta";
import IProfissional from "../../types/IProfissional";
import useDadosGrafico from "./useDadosGrafico";

interface Props {
    profissionais: IProfissional[] | null, // array
    consultas: IConsulta[] | null
}

interface IDados {
    nome: string,
    consultas: number
}

//estilizando uma section/ sessão do CSS
const SecaoEstilizada = styled.section`
background-color: var(--branco);
border-radius: 16px;
`

function Grafico({ profissionais, consultas }: Props) { // os parametros/ props que precisa receber
    let dados: Array<IDados> = useDadosGrafico({ profissionais, consultas });// adicionando o resultado dentro de uma var dados

    return (
        <SecaoEstilizada>
            {/* responsive Container para se adaptar a diversas telas */}
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    layout="vertical" //layout pode ser alterado nesse caso vertical
                    data={dados}
                    margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
                >
                    {/* número de consultas no X Axis*/}
                    <XAxis type="number"></XAxis>
                    {/* y axis legenda do gráfico nome dos médicos*/}
                    <YAxis type="category" dataKey="nome"></YAxis>
                    {/* bar a quantidade de consultas pra ir crescendo de acordo com o número dela */}
                    <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </SecaoEstilizada>
    )
}

export default Grafico;
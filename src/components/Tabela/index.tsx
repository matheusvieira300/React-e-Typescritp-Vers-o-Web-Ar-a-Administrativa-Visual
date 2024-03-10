import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IConsulta from "../../types/IConsulta";

const CelulaEstilizada = styled(TableCell)(() => ({ // modificando o tableCell da biblioteca mui
    [`&.${tableCellClasses.head}`]: {// head pra pegar a parte que está no cabeçalho 
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const LinhaEstilizada = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: { // logíca pra deixar um escuro e um não
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}))


function Tabela({ consultas }: { consultas: IConsulta[] | null }) { //informando o que tá recebendo e o tipo dele e que irá receber
    // o Iconsultas ou não receberá nada
    return (
        <>
        {/* table container serve para iniciar a tabela */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            {/*table row/ celulaEstilizada server para orgarnizar a tabela */}
                            <CelulaEstilizada>Data</CelulaEstilizada>
                            <CelulaEstilizada>Horário</CelulaEstilizada>
                            <CelulaEstilizada>Profissional</CelulaEstilizada>
                            <CelulaEstilizada>Especialidade</CelulaEstilizada>
                            <CelulaEstilizada>Paciente</CelulaEstilizada>
                            <CelulaEstilizada>Modalidade</CelulaEstilizada>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*corpo da tabela */}
                        {consultas?.map((linha) => {// map para percorer uma lista
                            return (
                                <LinhaEstilizada>
                                    {/* new date para criar uma data a partir do valor e toLocaleDateString */}
                                    {/* vai deixar a data formatada a partir da região que a pessoa mora */}
                                    <CelulaEstilizada component="th" scope="row">{new Date(linha.data).toLocaleDateString()}</CelulaEstilizada>
                                    <CelulaEstilizada>{linha.horario}</CelulaEstilizada>
                                    <CelulaEstilizada>{linha.profissional[0].nome}</CelulaEstilizada>
                                    {/* recebendo a partir do profissional número 0*/}
                                    <CelulaEstilizada>{linha.profissional[0].especialidade}</CelulaEstilizada>
                                    <CelulaEstilizada>{linha.paciente}</CelulaEstilizada>
                                    <CelulaEstilizada>{linha.modalidade}</CelulaEstilizada>
                                </LinhaEstilizada>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;
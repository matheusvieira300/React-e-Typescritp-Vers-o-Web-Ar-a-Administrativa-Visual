import avaliacao from './assets/avaliacao.png';
import grafico from './assets/grafico.png';
import consulta from './assets/consulta.png';
import styled from 'styled-components';

interface Props {
    imagem?: string, //optional pode ou não conter 
    children?: React.ReactNode
}

interface IImagens {
    avaliacao: string,
    grafico: string,
    consulta: string
}


//irá verificar se o props com imagem existe se sim ou não ficará none
const SpanEstilizado = styled.span<Props>`
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 25px;
height: 25px;
background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'}
`

// h2 título no html
const TituloEstilizado = styled.h2`
 color: var(--azul-claro);
`
//div tipo a view do Native
const ContainerEstilizado = styled.div`
 display: flex;
 align-items: center;
`

function Titulo({ imagem, children }: Props) {

    const listaDeImagens: IImagens = { // : para dizer que é uma const do tipo uma list de Imagens
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }

    //as key of quer dizer que o imagem está pegando o índice do IImagens
    // o {imagem &&} garante que aquele span só será impresso se uma imagem estiver sendo enviada pra ele
    return (
        <ContainerEstilizado>
            {imagem && <SpanEstilizado imagem={listaDeImagens[imagem as keyof IImagens]} />}
            <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstilizado>
    )
}

export default Titulo;
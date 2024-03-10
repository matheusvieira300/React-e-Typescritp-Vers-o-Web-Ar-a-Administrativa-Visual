import { useEffect, useState } from "react";

export default function useFetch<T>({ url }: { url: string }) {
    const [dados, setDados] = useState<T | null>(null); // T do tipo generics e o valor inicial será null
    const [erro, setErro] = useState('');//tipo string o erro

    // aqui o use effect também serve pro início do carregamento de uma página web
    useEffect(() => {
        fetch(`http://localhost:8080/${url}`).then( //para conectar com o backend
            resposta => resposta.json()
        ).then(dados => setDados(dados)).catch((erro => setErro(erro)))
    }, [url]) //entre colchetes url pra somente o valor da url mudar para não ter que fazer isso inúmeras vezes 
    
//then pega o valor já convertido da resposta e envia pro setDados e o catch pra caso der algum erro depois

    return { dados, erro }

}
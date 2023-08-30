function calculadora(){
    const operacao = Number(prompt("Escolha uma operacao:\n 1 - Soma [+]\n 2 - Subtracao [-]\n 3 - Multiplicacao [*]\n 4 - Divisao [/]\n 5 - Divisao Inteira [%]\n 6 - Potenciacao [**] "));

    if(!operacao || operacao >= 7){
        alert("ERRO! Digite uma operacao valida");
        calculadora()
    } else{
        let n1 = Number(prompt("Insira o primeiro valor: "));
        let n2 = Number(prompt("Insira o segundo valor: "));
        let resultado;
        
        if(!n1 || !n2){
            alert("ERRO! Parametros Invalidos");
            calculadora()
        } else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao()
            }
    
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao()
            }
            
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao()
            }
    
            function divisao(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao()
            }
    
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaOperacao()
            }
    
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                novaOperacao()
            }
    
            function novaOperacao(){
                let opcao = prompt("Deseja iniciar uma nova operacao?\n S - Sim\n N - Nao").toUpperCase(0);
                
                if (opcao == "S"){
                    calculadora();
                } else if (opcao == "N"){
                    alert("Até mais, amigo.");
                } else {
                    alert("ERRO! Digite uma opcao valida!");
                }
            }
        }

        /*
        if (operacao == 1){
            soma();
        } else if (operacao == 2){
            subtracao();
        } else if (operacao == 3){
            multiplicacao();
        } else if (operacao == 4){
            divisao();
        } else if (operacao == 5){
            divisaoInteira();
        } else if (operacao == 6){
            potenciacao();
        }
        */

        switch(operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;                    
        }

}

}

calculadora();  
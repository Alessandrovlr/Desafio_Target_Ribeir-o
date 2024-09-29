let cont = 0;
verificarLetraA("onibus");

verificarLetraA("Olá, o diA está muito bom");

function verificarLetraA(texto){
    texto = removerAcentos(texto).toLowerCase();
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            cont++;
        }
    }
    if(cont == 0){
        console.log(`A String ${texto} não possui a letra A(a)!`);
    }else{
        console.log(`A String ${texto} possui a letra A(a) ${cont} vezes!`);
    }
}

function removerAcentos(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // a expressão regular usada nesta linha foi atravez de buscas na internet
}
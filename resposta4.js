//A)

let sequenciaA = [1, 3, 5, 7];

function sequenciaNumImpar(){
    let proximoA = sequenciaA[sequenciaA.length -1] + 2;
    if(!(sequenciaA[sequenciaA.length -1] + 1) % 2 == 0){
        sequenciaA.push(proximoA);
    }
    console.log("Sequência A: " + sequenciaA.toString());
}

sequenciaNumImpar();

//B)

let sequenciaB = [2, 4, 8, 16, 32, 64];

function sequenciaNumDobro(){
    let proximoB = sequenciaB[sequenciaB.length - 1] * 2;
    sequenciaB.push(proximoB);
    console.log("Sequência B: " + sequenciaB.toString());
}

sequenciaNumDobro();

//C)

let sequenciaC = [0, 1, 4, 9, 16, 25, 36];

function sequenciaQuadradoNum(){
    proximoC = (sequenciaC.length) * (sequenciaC.length);
    sequenciaC.push(proximoC);
    console.log("Sequência C: " + sequenciaC.toString());
}

sequenciaQuadradoNum();

//D)

let sequenciaD = [4, 16, 36, 64];

function sequenciaQuadradoNumPar(){
    let proximoD = ((sequenciaD.length + 1) * 2) ** 2;
    sequenciaD.push(proximoD);
    console.log("Sequência D: " + sequenciaD.toString());
}

sequenciaQuadradoNumPar();

//E)

let sequenciaE = [1, 1, 2, 3, 5, 8];

function sequenciaFibonacci(){
    let proximoE = sequenciaE[sequenciaE.length - 1] + sequenciaE[sequenciaE.length - 2];
    sequenciaE.push(proximoE);
    console.log("Sequência E: " + sequenciaE.toString());
}

sequenciaFibonacci();


//F)

let sequenciaF= [2, 10, 12, 16, 17, 18, 19];

function nextNumSequenciaF(){
    let proximoF = sequenciaF[sequenciaF.length - 1] + 1;
    sequenciaF.push(proximoF);
    console.log("Sequência F: " + sequenciaF.toString());


}

nextNumSequenciaF();


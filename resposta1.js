let fibonacci1 = [0,1]
let contadorUsuario = 10

while (contadorUsuario != fibonacci1){
    let proximo = fibonacci1[fibonacci1.length - 1] + fibonacci1[fibonacci1.length - 2];
    fibonacci1.push(proximo);
        if(fibonacci1[fibonacci1.length -1] > contadorUsuario){
            break
        }
    }

console.log(fibonacci1.toString());

if(fibonacci1.length == contadorUsuario){
    console.log(`${contadorUsuario} faz parte da fibonacci`);
}else{
    console.log(`${contadorUsuario} não faz parte da fibonacci`)
}
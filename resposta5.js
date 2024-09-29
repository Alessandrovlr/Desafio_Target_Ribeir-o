function controlarLamps() {
    let lampA = false, lampB = false, lampC = false

lampA = true;
console.log("interruptor A ligado.")

setTimeout(() =>{
    lampA = false;
    console.log("interruptor A desligado.")


lampB = true;
console.log("Interruptor B ligado.");


setTimeout(() => {
    console.log("Verificando as lâmpadas...");

    if (lampA) {
        console.log("Lâmpada A está ACESA");
    } else {
        console.log("Lâmpada A está APAGADA e FRIA");
    }

    if (lampB) {
        console.log("Lâmpada B está ACESA");
    } else {
        console.log("Lâmpada B está APAGADA e QUENTE");
    }

    if (!lampA && !lampB) {
        console.log("Lâmpada C está APAGADA e FRIA");
    }
    console.log(`CCONCLUSão:
Interruptor A controla a lâmpada APAGADA e FRIA
Interruptor B controla a lâmpada ACESA
Interruptor C controla a lâmpada APAGADA e FRIA`);
        },1000);
    }, 2000);
}

controlarLamps();
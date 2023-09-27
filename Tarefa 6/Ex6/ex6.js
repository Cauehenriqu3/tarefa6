const value = window.prompt('Digite um número');

console.log("Tabuada do " + value);

for (var i = 1; i<= 10; i++) {
    const result = value * i;
    console.log(value + "x" + i + "=" + result);
}

    

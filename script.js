let saldo = 0;

function depositar() {
    let valor = parseFloat(prompt("Digite o valor a depositar:"));
    if (valor > 0) {
        saldo += valor;
        alert(`Depósito de R$ ${valor.toFixed(2)} realizado. Saldo atual: R$ ${saldo.toFixed(2)}.`);
    } else {
        alert("Valor inválido.");
    }
}

function sacar() {
    let valor = parseFloat(prompt("Digite o valor a sacar:"));
    if (valor > 0 && valor <= saldo) {
        saldo -= valor;
        alert(`Saque de R$ ${valor.toFixed(2)} realizado. Saldo atual: R$ ${saldo.toFixed(2)}.`);
    } else {
        alert("Valor inválido ou saldo insuficiente.");
    }
}

function verSaldo() {
    alert(`Saldo atual: R$ ${saldo.toFixed(2)}.`);
}

function menu() {
    let opcao;
    do {
        opcao = prompt(
            "Escolha uma opção:\n1. Depositar\n2. Sacar\n3. Ver Saldo\n4. Sair"
        );
        if (opcao === "1") depositar();
        else if (opcao === "2") sacar();
        else if (opcao === "3") verSaldo();
        else if (opcao === "4") alert("Saindo...");
        else alert("Opção inválida.");
    } while (opcao !== "4");
}

menu();
function validar(){
    let a = document.getElementById("yasmim").value;
    let b = document.getElementById("caio").value;
    let c = document.getElementById("amigo").value;
    let d = document.getElementById("chocolate").value;
    let e = document.getElementById("data").value;

    if (a.trim().toUpperCase() == 'YASMIM' && b.trim().toUpperCase() == 'CAIO' && c.trim().toUpperCase() == 'CAIO' && d.trim().toUpperCase()== 'KITKAT' && e == '2021-06-26'){
        alert('Uhullll!!! acertou mo, ganhou um vale KitKat, uma massagem e vários beijinhos Te amooooo!!!');
    }
    else if(a.trim().toUpperCase() != 'Yasmim'){
        alert('Nome incorreto! (Suspeito isso em)');
    }
    else if(b.trim().toUpperCase() != 'CAIO'){
        alert('COMO VOCÊ ERROU O NOME DO SEU NAMORADO???');
    }
    else if(c.trim().toUpperCase() != 'CAIO'){
        alert('Eu que sou seu melhor amigo né bobona');
    }
    else if(d.trim().toUpperCase() != 'KITKAT'){
        alert('Errou o chocolate, tenta tudo junto com as iniciais maiusculas');
    }
    else if(e != '2021-06-26'){
        alert('Poxa mo, errou nossa data?');
    }
}

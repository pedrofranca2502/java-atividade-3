function entrar(){
    var idade = parseInt (document.getElementById("idade").value);

    if(idade<18){
        alert(`voce tem ${idade} anos, menor de idade nao pode entrar`);   
        
    } else {
        alert(`voce tem ${idade} anos, fique a vontade`)
    }
}


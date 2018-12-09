function funcEmail(){
elemento = document.getElementById("label-email");

elemento.classList.add("label-form-show");
elemento.innerHTML = "Email*";

}

function sumirEmail(){

    elemento = document.getElementById("label-email");

    elemento.classList.remove("label-form-show");
    elemento.innerHTML = "";
}

function funcMensagem(){
    elemento = document.getElementById("label-mensagem");
    
    elemento.classList.add("label-form-show");
    elemento.innerHTML = "Mensagem*";
    
    }

    function sumirMensagem(){

        elemento = document.getElementById("label-mensagem");
    
        elemento.classList.remove("label-form-show");
        elemento.innerHTML = "";
    }

    function funcNome(){

        elemento = document.getElementById("label-nome");
        

        elemento.classList.add("label-form-show");
        elemento.innerHTML = "Nome*";
        
        }

        function sumirNome(){

            elemento = document.getElementById("label-nome");
        
            elemento.classList.remove("label-form-show");
            elemento.innerHTML = "";
        }

        function funcAssunto(){
            elemento = document.getElementById("label-assunto");
            
            elemento.classList.add("label-form-show");
            elemento.innerHTML = "Assunto*";
            
            }
    
            function sumirAssunto(){
    
                elemento = document.getElementById("label-assunto");
            
                elemento.classList.remove("label-form-show");
                elemento.innerHTML = "";
            }
<!DOCTYPE <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewpoint" content="width=device-width, initial=scale = 1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mabi Germano</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'>
    <link rel="stylesheet" type="text/css" media="screen" href="estilo.css" />
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Josefin+Sans|Roboto" rel="stylesheet">
    <script src="eventos.js"></script>
</head>
<body>
    <header>
        <img id="logo" src="img/logo.png">
        <nav>
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="#projetos"><li>Projetos</li></a>
                <a href="#contato"><li>Contatos</li></a>
            </ul>
        </nav>
        <img id="foto-perfil" src="img/me2.jpg">
        
            <h1>Mulher. <br/>
                Brasileira. <br/>
                Desenvolvedora. <br/>
            </h1>
            <p>Olá! Meu nome é Maria Beatriz Germano.
                Sou desenvolvedora para web, moro em Recife - PE, Brasil. <br/> 
                Eu amo programar porque isso me dá a oportunidade de construir sistemas e ideias que tem um impacto na vida das pessoas. Sou apaixonada por compartilhar conhecimentos e conhecer novas pessoas.</p>
    </header>
    <section id="projetos">
        <div id="titulo-projetos">
            <h2>Projetos</h2>
            <h3>Um pouco mais de quem sou e o que faço:</h3>
        </div>
        <div class="card" id="card-1" alt="linkedin">
            <img src="img/linkedin.jpg">
            <p>Um pouco mais sobre mim...</p>
        </div>
        <div class="card" id="card-2">
            <img src="img/octocat.png">
            <p>Pequenos projetos...</p>
        </div>
        <div class="card" id="card-3">
            <img src="img/wwCode.jpg">
            <p>Membro do Woman Who Code</p>
        </div>
    </section>

    <address id="contato">
        <h1>Vamos Conversar?</h1>
        <form>
        <div>
            <label for="nome" id="label-nome" class="label-form"></label>
            <input type="text" name="nome" id="nome" class="linha1" placeholder="Nome*" onkeydown="funcNome()" onblur="sumirNome()" alt="Nome" required>
        </div>
        
        <div id="div-assunto">
            <label for="assunto" id="label-assunto" class="label-form"></label>
            <input type="text" name="assunto" id="assunto" class="linha2" placeholder="Assunto*" onkeydown="funcAssunto()" onblur="sumirAssunto()" alt="Assunto" required>
        </div>

        <div id="div-email">
            <label for="email" id="label-email" class="label-form"></label>
            <input type="email" name="email" id="email" onkeydown="funcEmail()" onblur="sumirEmail()" class="linha2" placeholder="Email*" alt="Email" required>
        </div>
        <div id="div-mensagem">
            <label for="mensagem" id="label-mensagem" class="label-form"></label>
            <textarea name="mensagem" id="mensagem" class="linha3" cols="30" rows="10" placeholder="Mensagem*" onkeydown="funcMensagem()" onblur="sumirMensagem()" alt="Mensagem" required></textarea>
        </div>
        
        <button type="submit">Enviar</button>
        </form>
    </address>


</body>
</html>
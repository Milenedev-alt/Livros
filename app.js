function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);
  
    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    console.log(campoPesquisa);
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Converte o título para minúsculas para comparação case-insensitive
      let tituloMinusculo = dado.titulo.toLowerCase();
      if (tituloMinusculo.includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa)) {
        // Cria um novo elemento div para cada resultado
        let itemResultado = document.createElement("div");
        itemResultado.classList.add("item-resultado");
  
        // Cria os elementos HTML e adiciona o conteúdo dinamicamente
        let titulo = document.createElement("h2");
        let linkTitulo = document.createElement("a");
        linkTitulo.href = dado.compra;
        linkTitulo.target = "_blank";
        linkTitulo.textContent = dado.titulo;
        titulo.appendChild(linkTitulo);
  
        let descricao = document.createElement("p");
        descricao.classList.add("descricao-meta");
        descricao.textContent = dado.descricao;
  
        let linkMais = document.createElement("a");
        linkMais.href = dado.link;
        linkMais.target = "_blank";
        linkMais.textContent = "Saiba mais";
  
        itemResultado.appendChild(titulo);
        itemResultado.appendChild(descricao);
        itemResultado.appendChild(linkMais);
  
        // Adiciona o item resultado à string de resultados
        resultados += itemResultado.outerHTML;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (resultados === "") {
      // Cria um elemento div para a mensagem
      let mensagemNaoEncontrado = document.createElement("div");
      mensagemNaoEncontrado.classList.add("mensagem-nao-encontrado");
      mensagemNaoEncontrado.textContent = "Resultado não encontrado.";
  
      // Adiciona a mensagem à seção
      section.appendChild(mensagemNaoEncontrado);
    } else {
      // Se houver resultados, atribui o HTML gerado à seção
      section.innerHTML = resultados;
    }
  }
$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        novoItem = $('<li style="display: none">');
        $(`
                <img src="${enderecoDaNovaImagem}" />
                <div class="overlay-imagem-link">
                    <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                        Ver imagem em tamanho real
                    </a>
                </div>
            <li>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul')
            $(novoItem).fadeIn(1000);
            $('#endereco-imagem-nova').val('');
    })
})
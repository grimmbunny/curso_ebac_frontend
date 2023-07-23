
$(document).ready(function() { 

    $("form").on("submit", function(e) {
        e.preventDefault();

const nomeDaTarefa =  $('#nome-da-tarefa').val();
let novoItem = $('<li></li>');

$(`${nomeDaTarefa}`).appendTo(novoItem);
$(`<li>
${nomeDaTarefa}
</li>`).appendTo(novoItem);
$(novoItem).appendTo('ul');
$(novoItem).fadeIn(1000);

$('#nome-da-tarefa').val('');

tarefaConcluida(novoItem);

    $(novoItem).hover(function() {
        $(novoItem).css({"cursor":"pointer"});
    })

    function tarefaConcluida () {
        $(novoItem).click(function() {
            $(novoItem).css({"text-decoration": "line-through"});
        }) }

    });
});


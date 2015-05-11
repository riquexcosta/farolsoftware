$(document).ready(function(){


	$('.menu-btn').on('click', function(){

		$(".mobile-menu").toggleClass('aberto');
		event.preventDefault();
	});


	$('.mobile-menu a').on('click', function(){
		$(".mobile-menu").removeClass('aberto');
		event.preventDefault();
	});

	$(document).mouseup(function (e)
{
    var container = $(".mobile-menu");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.removeClass('aberto');
    }
});


	$('#form-contato').validate({
		submitHandler: function(form) {

			$('#form-contato button').html('Enviando...');
			
			var nome = $('#form-contato input[name="nome"]').val();
			var email = $('#form-contato input[name="email"]').val();
			var telefone = $('#form-contato input[name="telefone"]').val();
			var mensagem = $('#form-contato textarea').val();
			

			$.ajax({
				type: "POST",
				url: "http://www.rique.co/enviar-email-farol.php",
				data: {
					nome:nome,
					email:email,
					telefone:telefone,
					mensagem: mensagem
				},
				dataType: 'JSON',
				success:function(response){
					
					$('#form-contato input, #form-contato textarea').val('');
					$('#form-contato button[type="submit"]').html('Enviado com sucesso!').after('<h3 style="color: #1c8f41">Obrigado, logo mais retornaremos o seu contato.</h3>');
				}
			});		
			return false;
		}
	});

});

// $(document).scroll(function(){

// 	var position = $(document).scrollTop();
// 	var altura = 100;
// 	if (position > 0 && position < 620){
// 		altura = altura-position*0.8;
// 		$('.semfundo').css('background-position','0px '+altura+'px')
// 	}
// });
$(document).ready(function(){$(".menu-btn").on("click",function(){$(".mobile-menu").toggleClass("aberto"),event.preventDefault()}),$(".mobile-menu a").on("click",function(){$(".mobile-menu").removeClass("aberto"),event.preventDefault()}),$(document).mouseup(function(t){var o=$(".mobile-menu");o.is(t.target)||0!==o.has(t.target).length||o.removeClass("aberto")}),$("#form-contato").validate({submitHandler:function(){$("#form-contato button").html("Enviando...");var t=$('#form-contato input[name="nome"]').val(),o=$('#form-contato input[name="email"]').val(),e=$('#form-contato input[name="telefone"]').val(),a=$("#form-contato textarea").val();return $.ajax({type:"POST",url:"http://www.rique.co/enviar-email-farol.php",data:{nome:t,email:o,telefone:e,mensagem:a},dataType:"JSON",success:function(){$("#form-contato input, #form-contato textarea").val(""),$('#form-contato button[type="submit"]').html("Enviado com sucesso!").after('<h3 style="color: #1c8f41">Obrigado, logo mais retornaremos o seu contato.</h3>')}}),!1}})});
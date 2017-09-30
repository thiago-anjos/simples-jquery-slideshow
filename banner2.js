$(document).ready(function(){




	  var numeroImagens = $('#containerBanners img').length-1;

	  var imagemAtual = 0;
	  var posicaoTranslateImagem;
	  var larguraImagem = $('#containerBanners').width();


	(function () {
	    numeroImagensBullets = $('#containerBanners img').length;
	    var elementoUL = document.createElement('ul');
	    for(var i=0; i < numeroImagensBullets; i++){
	    	var elementoLI = document.createElement('li');
	    	elementoUL.appendChild(elementoLI);
	    }
	    $('#bullets')[0].appendChild(elementoUL);
	    $('#bullets li').eq(0).addClass("ativa");
	})();




		$(".proxima").on('click', function(){
			if(imagemAtual < numeroImagens){
				imagemAtual++;
				posicaoTranslateImagem = larguraImagem * imagemAtual;
				$(".container").css('transform', "translateX("+(-posicaoTranslateImagem)+"px)");
				console.log(imagemAtual);
				console.log(posicaoTranslateImagem);
				$('#bullets li').removeClass("ativa");
				$('#bullets li').eq(imagemAtual).addClass("ativa");
			}
		})


	$(".anterior").on('click', function(){
		console.log(imagemAtual);
		if(imagemAtual > 0){
			imagemAtual--;
			posicaoTranslateImagem = posicaoTranslateImagem - larguraImagem;
			$("#containerBanners .container").css('transform', "translateX("+(-posicaoTranslateImagem)+"px)");
			console.log(imagemAtual);
				$('#bullets li').removeClass("ativa");
				$('#bullets li').eq(imagemAtual).addClass("ativa");
		}

	})



	$('#bullets li').on('click', function(){
		var elemento = $(this).index();
		var translateElemento = elemento * larguraImagem;
		console.log(translateElemento);

		$('#bullets li').removeClass("ativa");
		$(this).addClass("ativa");

		$("#containerBanners .container").css('transform', "translateX("+(-translateElemento)+"px)");
		console.log(imagemAtual);
		

	})


});
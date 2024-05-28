document.addEventListener('dragstart', function (event) {
  if (event.target.classList.contains('mercado-item')) {
    event.target.classList.add('dragging');
  }
});

document.addEventListener('dragend', function (event) {
  const draggingElement = document.querySelector('.dragging');
  if (draggingElement) {
    draggingElement.classList.remove('dragging');
  }
});

document.addEventListener('dragover', function (event) {
  event.preventDefault();
});

document.addEventListener('drop', function (event) {
  event.preventDefault();
  const draggedElement = document.querySelector('.dragging');
  const dropTarget = event.target;

  if (dropTarget.classList.contains('espaco-mercado')) {
    if (!dropTarget.innerHTML) {
      dropTarget.appendChild(draggedElement);
    } else {
      dropTarget.appendChild(draggedElement);
    }
  }


  const allItems = document.querySelectorAll('.mercado-item');
  const allSpaces = document.querySelectorAll('.espaco-mercado');
  let completed = true;
  allSpaces.forEach(space => {
    if (!space.querySelector('.mercado-item')) {
      completed = false;
      return;
    }
  });

  if (completed) {
    openPositiveFeedbackModal();
  }
});

function openPositiveFeedbackModal() {
  $('#modalFeedbackFinal').modal('show');
}

$(document).ready(function () {



  $(".mercado-item").on("dragstart", function (event) {
    $(this).addClass('dragging');
    event.originalEvent.dataTransfer.setData("text/plain", $(this).data('resp') + '-' + $(this).text());
  });

  $(".mercado-item").on("dragend", function (event) {
    $(this).removeClass('dragging');
  });

  $(".espaco-mercado").on("dragover", function (event) {
    event.preventDefault();
  });


  $(".espaco-mercado").on("drop", function (event) {
    event.preventDefault();
    var parteProdutoData = event.originalEvent.dataTransfer.getData("text/plain").split('-');
    var parteProduto = parteProdutoData[0].trim();
    var espacoMercado = $(this).data('resp').trim();


    if (parteProduto === espacoMercado) {
      $(this).removeClass('bg-danger');
      $("#audio-acerto")[0].play();
      $('#modalFeedbackPositivo').modal('show');
    } else {
      $(this).addClass('bg-danger');
      $(".mercado-item").removeClass('dragging');
      $("#audio-errado")[0].play();
      $('#modalFeedbackNegativo').modal('show');
    }
  });

  $('.btn-iniciar').click(function (e) {
    e.preventDefault();
    $('#tela1').hide();
    $('#tela2').show();
  });

  function escalaProporcao(largura, altura) {
    var larguraScreen = $(window).width();
    var alturaScreen = $(window).height();
    var proporcaoAltura = (alturaScreen * 100) / altura;
    var proporcaoLargura = (larguraScreen * 100) / largura;
    var proporcao, larguraAltura, larguraAlturaAuto;

    if (proporcaoAltura < proporcaoLargura) {
      larguraAltura = "height";
      larguraAlturaAuto = "width";
      proporcao = proporcaoAltura / 100;
    } else {
      larguraAltura = "width";
      larguraAlturaAuto = "height";
      proporcao = proporcaoLargura / 100;
    }

    console.log(proporcao, proporcaoAltura, proporcaoLargura)
    return [proporcao, larguraAltura, larguraAlturaAuto];
  }

  resizeBodyConteudo();

  function resizeBodyConteudo() {
    var proporcao1920 = escalaProporcao(1920, 1080)[0];

    $(".conteudo").css({
      "transform": "scale(" + proporcao1920 + ")",
      "transform-origin": "center center"
    });

    var proporcao900;

    if ($(window).width() < 992) {
      proporcao900 = escalaProporcao(900, 576)[0];
    } else {
      proporcao900 = 1;
    }
  }

  $(window).resize(function () {
    resizeBodyConteudo()
  })
});
$(document).ready(function(){
    $('#button').click(function(){
        var errores = '';
        // Validando nombre ==================================
        if ( $('#names').val() == '' ) {
            errores += '<p>Escribe tu nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else {
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validando correo ==================================
        if ( $('#email').val() == '' ) {
            errores += '<p>Ingrese un correo electrónico</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else {
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validando correo ==================================
        if ( $('#tipo').val() == '' ) {
            errores += '<p>Escriba el tipo de mansaje</p>';
            $('#tipo').css("border-bottom-color", "#F14B4B")
        } else {
            $('#tipo').css("border-bottom-color", "#d1d1d1")
        }

        // Validando mensaje =================================
        if ( $('#mensaje').val() == '' ) {
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else {
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // Enviando mensaje ==================================
        if (errores == '' == false) {
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                               '</div>'
            $('body').append(mensajeModal);
        }

        // Cerrando modal de errores ==========================

        $('#btnClose').click(function () {
            $('.modal_wrap').remove();
        });
    });
});
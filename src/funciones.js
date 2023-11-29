import Swal from "sweetalert2";
import axios from "axios";


export function mostrarAlerta(titulo, icono, foco = '') {
    if (foco != '') {
        document.getElementById(foco).focus();
    }

    Swal.fire({
        title: titulo,
        customClass: { confirmButton: 'btn btn-primary', popup: 'animated zoonIn' },
        buttonsStyling: false
    })

}

export function confirmarAlerta(url, id, titulo, mensaje) {
    const SwalButton = Swal.mixin({
        customClass: { confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger' },
    });

    SwalButton.fire({
        title: titulo,
        text: mensaje,
        icon: "question",
        showCancelButton: true,
        confirmButtonHtml: '<i class="fa-solid fa-check"></i> Si, eliminarlo',
        cancelButtonText: '<i class="fa-solid fa-check"></i> Cancelar',
    }).then((res) => {
        if (res.isConfirmed) {
            enviarSolicitud('DELETE', {}, url + id, 'Eliminado con Éxito');
        } else {
            mostrarAlerta('Operacion Cancelada', 'info');
        }
    });
}


export function enviarSolicitud(metodo, parametros, url, mensaje) {
    axios({ method: metodo, url: url, data: parametros })
        .then(function (res) {
            var estado = res.status;
            if (estado == 200) {
                mostrarAlerta(mensaje, 'success');
                window.setTimeout(function () {
                    window.location.href = '/';
                }, 1000);
            } else {
                mostrarAlerta('No se recuperó la respuesta', 'error');
            }
        })
        .catch(function (error) {
            mostrarAlerta('Error', 'error');
        });
}

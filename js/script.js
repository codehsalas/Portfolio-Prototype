function revisarDatos() {
  let datos = new Object();
  let nombre = document.getElementById('name_contact').value;
  let correo = document.getElementById('email_contact').value;
  let telefono = document.getElementById('tel_contact').value;
  let mensaje = document.getElementById('message_contact').value;

  if (nombre.length < 5) {
    document.getElementById('msg_name').innerText = 'Ingrese su nombre';
  } else {
    document.getElementById('msg_name').innerText = '';
    datos['Nombre'] = nombre;
  }

  if (correo.length > 0) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(correo)) {
      document.getElementById('msg_email').innerText = 'Ingrese un correo valido';
    } else {
      document.getElementById('msg_email').innerText = '';
      datos['Email'] = correo;
    }
  } else {
    document.getElementById('msg_email').innerText = 'El correo es obligatorio';
  }

  if (telefono.length < 5) {
    document.getElementById('msg_tel').innerText = 'Ingrese un numero valido';
  } else {
    document.getElementById('msg_name').innerText = '';
    datos['Teléfono'] = telefono;
  }

  if (mensaje.length < 5) {
    document.getElementById('msg_mess').innerText = 'Ingrese un mensaje';
  } else {
    document.getElementById('msg_mess').innerText = '';
    datos['Mensaje'] = mensaje;
  }

  console.log(datos);
}

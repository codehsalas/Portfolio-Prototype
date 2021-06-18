function revisarDatos() {
  let nombre = document.getElementById('name_contact').value;
  let correo = document.getElementById('email_contact').value;
  let telefono = document.getElementById('tel_contact').value;
  let mensaje = document.getElementById('message_contact').value;

  if (nombre.length < 5) {
    document.getElementsById('msg_name').innerText = 'Ingrese su nombre';
  } else {
    console.log('Nombre ingresado');
    console.log(nombre);
  }
}

//Conectamos el controlador de eventos de autentificación a otra función OnLinkedInAuth
function onLinkedInLoad() {
  IN.Event.on(IN, 'auth', getProfileData);
}
// Handle an error response from the API call
function onError(error) {
  console.log(error);
}
// Handle the successful return from the API call
function onSuccess(data) {
  console.log(data);
  
  let firstName = data.firstName;
  let lastName = data.lastName;
  let headline = data.headline;
  document.getElementById('auth').innerText = '¡Bien!'
  document.getElementById('sentence').innerText = 'Se ha concluido con la identificación exitosamente';
  /* silvia1 */
  let container = document.getElementById('icon');
  let icon = document.createElement('i');
  icon.setAttribute('class', 'glyphicon glyphicon-ok icon_check');
  container.appendChild(icon);
  /* Fin silvia1 */
  
  /* Silvia 2 */
  
   /* Fin Silvia 2 */
  let ph = document.createElement('p');
  ph.setAttribute('id', 'headline');
  pname.appendChild(ph);
  /* Silvia 3 */
  
   /* Fin Silvia 3 */
  document.getElementById('headline').innerText = `${headline}`;
  
}
// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
  IN.API.Raw("/people/~").result(onSuccess).error(onError);
}
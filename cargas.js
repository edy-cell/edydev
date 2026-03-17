
  fetch('aportes.html')
    .then(res => res.text())
    .then(data => document.getElementById('aportes').innerHTML = data);
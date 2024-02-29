if (window.performance && window.performance.navigation.type == 2) {
    window.location.reload();
  }
  // Sistema do darkmode
  window.onload = function () {
    if (localStorage.darkMode == "true") {
      document.body.classList.toggle('dark');
      document.getElementById("darkactive").checked = true;
    }
    else {
  
      document.body.classList.toggle('light');
    }
  };
  document.getElementById("darkactive").addEventListener('change', darkactive)
  document.getElementById("darkmobile").addEventListener('change', darkactive)
  function darkactive() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    localStorage.darkMode = (localStorage.darkMode == "true") ? "false" : "true";
  };
  // Botão menu mobile
  var menut = true
  function menutoogle() {
    if (menut) {
      var mobi = document.querySelector('.menumobile')
      mobi.style.display = ('flex')
      mobi.style.position= ('fixed')
      mobi.style.animation = ('menumobi 500ms ease-in-out')
    }
    else {
      var mobi = document.querySelector('.menumobile')
      mobi.style.animation = ('menumobiext 500ms ease-in-out')
      mobi.style.display = ('none')
  
    }
    menut = !menut
  }
  // var ass= document.getElementById('assinaturas')
  // ass.addEventListener('click', function(){
  //   console.log(ass)
  //   window.location.href = "http://127.0.0.1:5500/Assinaturas/index.html";
  
  // })
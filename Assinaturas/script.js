if (window.performance && window.performance.navigation.type == 2) {
    window.location.reload();
  }
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
    
    var menut = true
  function menutoogle() {
    console.log(menut)
    if (menut) {
      console.log(menut)
      var mobi = document.querySelector('.menumobile')
      mobi.style.display = ('flex')
      mobi.style.animation = ('menumobi 500ms ease-in-out')
    }
    else {
      var mobi = document.querySelector('.menumobile')
      mobi.style.animation = ('menumobiext 500ms ease-in-out')
      mobi.style.display = ('none')
    }
    menut = !menut
  }
document.addEventListener('DOMContentLoaded', function () {
    const lamp = document.getElementById('lamp');
    const toggleButton = document.getElementById('toggleButton');
    let isLampOn = false;
  
    function toggleLamp() {
      if (isLampOn) {
        lamp.src = 'on.png';
        isLampOn = false;
      } else {
        lamp.src = 'off.png';
        isLampOn = true;
      }
    }
  
    toggleButton.addEventListener('click', toggleLamp);
  });

  
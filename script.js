function mudaFoto (foto){
    document.getElementById("logo").src = foto;
}

function showPlayerImage(playerId) {
    var playerImages = document.querySelectorAll('.player-image');
    playerImages.forEach(function(image) {
      image.style.display = 'none';
    });

    var currentPlayerImage = document.getElementById('player-image-' + playerId);
    currentPlayerImage.style.display = 'block';
    currentPlayerImage.style.marginLeft = "72%";
    currentPlayerImage.style.position = "absolute";
    currentPlayerImage.style.top = "300px";
  }

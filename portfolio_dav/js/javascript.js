function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");

    if(html.classList.contains("light")){
        img.setAttribute("src", "./img/pfp_light.png");
    } else {
        img.setAttribute("src", "./img/pfp_dark.png");
    }
}

const link = document.getElementById('abrir');
const img = document.getElementById('janela');

link.addEventListener('click', function(e) {
  e.preventDefault();
  img.style.display = img.style.display === 'none' ? 'block' : 'none';
});
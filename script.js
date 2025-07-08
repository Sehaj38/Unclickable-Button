 const buttonHeight = 30;
 const buttonWidth = 150;
 
 const maxwidth = window.innerWidth - buttonWidth;
 const maxheight = window.innerHeight - buttonHeight;
 window.addEventListener("DOMContentLoaded" , () => {
    const button = document.getElementById('button');

    button.addEventListener('click' , () => alert('you clicked me'));

    button.addEventListener('mouseover' , () => {
        button.style.left = Math.floor(Math.random() * (maxwidth + 1 )) + 'px';
        button.style.top = Math.floor(Math.random() * (maxheight + 1 )) + 'px';
 })
 });

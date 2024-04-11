// Theme change

themeButton = document.querySelector('.theme-btn');

themeButton.onclick = function(){
    themeButton.classList.toggle('light-mode-on');
    document.body.classList.toggle('light-theme');

    if (localStorage.getItem("theme") == "dark"){
        localStorage.setItem("theme", "light");
    }
    else{
        localStorage.setItem("theme", "dark")
    }
}

if(localStorage.getItem("theme")== 'dark'){
    themeButton.classList.remove('light-mode-on');
    document.body.classList.remove('light-theme');
}
else if (localStorage.getItem("theme") == 'light'){
    themeButton.classList.add("light-mode-on");
    document.body.classList.add('light-theme')
}
else{
    localStorage.setItem("theme", "dark")
}
// close menu

showMenuButton = document.querySelector('.show-menu');
menuButton = document.querySelector('.menu-toggler');
leftside = document.querySelector('.left-side');

showMenuButton.onclick = function(){
    leftside.classList.remove('closed');
}

menuButton.onclick = function(){
    leftside.classList.add('closed');
    showMenuButton.classList.add('active');
}

// Project link
projectLinks = document.querySelectorAll('.link');

projectLinks.onclick = function(){
    alert('button was clicked')
}

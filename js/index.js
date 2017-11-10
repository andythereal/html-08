$(function(){
    $('.buttons button').click(activatePanel);    
});

// document.querySelectorAll('.buttons button')
//     .forEach( btn => btn.addEventListener('click', activatePanel) );

function activatePanel(ev) {
    // 1. Clear all active on buttons and panels
    document.querySelectorAll('.buttons button, .panels div')
        .forEach( el => el.classList.remove('active') ) ;
    // 2. Set active to clicked button
    ev.target.classList.add('active');
    // 3. Set active on panel corresponding to button
    document.getElementById(ev.target.dataset.panel).classList.add('active');
}    
    
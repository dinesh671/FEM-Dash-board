const setColorMode= () =>{
    console.log('setColorMode');
    console.log( localStorage.getItem('colorMode'));
    localStorage.getItem('colorMode')== 'dark' ? setDarkMode() : setLightMode();

};
const setDarkMode =()=>{
   document.querySelector('body').classList='dark'; 
}
const setLightMode=()=>{
    document.querySelector('body').classList='light';
}

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
for(let i=0;i< radioButtons.length;i++){
    radioButtons[i].addEventListener('click', event =>{
        
        if (document.getElementById('dark').checked) {
            localStorage.setItem('colorMode','dark');
        } else {
            localStorage.setItem('colorMode','light');
        }
    })
}

setColorMode()
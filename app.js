let header = document.querySelector('header');
let rgb = document.getElementById('rgb');

function changeRGB() {
    return Math.floor(Math.random() * 256);
}

console.log(changeRGB());

const changeColorDIV = () => {
    
    document.addEventListener('keydown', (e) => {
        if(e.keyCode === 32 ) {
            let a = changeRGB();
            let b = changeRGB();
            let c = changeRGB();

            let newRGB = `rgb(${a}, ${b}, ${c})`

            header.style.backgroundColor = newRGB;
            rgb.textContent = newRGB;
        } 
    })
}


changeColorDIV();

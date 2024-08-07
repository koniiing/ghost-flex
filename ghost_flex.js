 
const parent = document.querySelector('.view-container');
const children = parent.querySelectorAll('.item')
const quiz = document.querySelector('.quiz-container .code-container');
const hints = document.querySelectorAll('.hint-code');

const prtCode = document.querySelector('.parent-code');
const childCode = document.querySelectorAll('.code');  
const codes = quiz.querySelectorAll('textarea'); 
const [ imgSize, codeReset, runCode ] = document.querySelectorAll('.btn-area button');

 
imgSize.addEventListener('click', imgSizeToggle );
codeReset.addEventListener('click', resetFlex);
runCode.addEventListener('click', getCode);

function imgSizeToggle(e) { 
    parent.classList.toggle('size');
    e.target.classList.toggle('size'); 
}

function resetFlex(e) {
    location.reload(true);
}

function getCode(e) { 
    parent.style.cssText = prtCode.value;  
    children.forEach( (img, idx)  => { 
        let style = childCode[idx].value; 
        img.style.cssText = style;
    }) 
}

codes.forEach( code => {
    code.addEventListener('focus', (e) => { 
        hints.forEach( hint => { 
            if(hint.dataset.code === code.dataset.code) {
                hint.style.display = 'block'
            }
        })
    })

    code.addEventListener('blur', (e) => {
        hints.forEach(hint => hint.style.display = 'none')
    })
});
 
function themeDark() {
//    btn.style.backgroundColor = 'blue'
}

function themeLight() {

}
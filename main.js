let lbsInput = document.getElementById('lbsInput')
let output = document.getElementById('output')
let gramsOutput = document.getElementById('gramsOutput')
let kgOutput = document.getElementById('kgOutput')
let ozOutput = document.getElementById('ozOutput')


output.style.visibility = 'hidden'


lbsInput.addEventListener('input', function(event) {
    output.style.visibility = 'visible'

    let lbs = event.target.value;

    gramsOutput.innerText = lbs/0.0022046;
    kgOutput.innerText = lbs/2.2046;
    ozOutput.innerText = lbs*16;
})

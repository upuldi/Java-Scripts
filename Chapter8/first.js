function longRunningFunction() {
    console.log('A Long Running Function Started....');
    var mills = 3000 + new Date().getTime();
    while (new Date() < mills) {
        //Do nothing 
    }
    console.log('function finished');
}

function clickHandlier() {
    console.log('Clieck event occurred !...');
}

document.addEventListener('click',clickHandlier);

longRunningFunction();
console.log('Finished executing global execution context...');
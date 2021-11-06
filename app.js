console.log();
const now = new Date();

// https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

// https://stackoverflow.com/questions/29816872/how-can-i-convert-milliseconds-to-hhmmss-format-using-javascript

function msToHMS(ms) {
    let seconds = parseInt(ms / 1000);
    const hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    const minutes = parseInt(seconds / 60); 
    seconds = seconds % 60;
    return (pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2));
}

// https://stackoverflow.com/questions/30922008/calculate-percentage-javascript
function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
} 

function itsNovember() {
    if(now.getMonth() == 10) {
        return true;
    } else return false;
}

const nstart = new Date("11/01/" + now.getFullYear() + " 00:00:00").getTime();
const dstart = new Date("12/01/" + now.getFullYear() + " 00:00:00").getTime();
const mlenght = dstart - nstart;

function NNN() {
    const now_ms = Date.now();
    const until = (dstart-now_ms);
    const until_now = (dstart-nstart)-until;
    
    if(itsNovember()) {
        $('.nnn').show();
        $('.nnn_stats').show();
        $('.until').html(msToHMS(until));
        $('.stats_hours').html(msToHMS(until_now));
        $('.stats_percentage').html(percentage(until_now, mlenght).toFixed(5) + "%");
        setTimeout(NNN, 1000);
    } else {
        $('.non_nnn').show();
    }
};
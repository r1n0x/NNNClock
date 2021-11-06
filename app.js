console.log();
    // https://stackoverflow.com/questions/29816872/how-can-i-convert-milliseconds-to-hhmmss-format-using-javascript
    function msToHMS( ms ) {
        // 1- Convert to seconds:
        let seconds = parseInt(ms / 1000);
        // 2- Extract hours:
        const hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
        seconds = seconds % 3600; // seconds remaining after extracting hours
        // 3- Extract minutes:
        const minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
        // 4- Keep only seconds not extracted to minutes:
        seconds = seconds % 60;
        return( hours+":"+minutes+":"+seconds);
    }
    // https://stackoverflow.com/questions/30922008/calculate-percentage-javascript
    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    } 
    const now = new Date();
    const nstart = new Date("11/01/" + now.getFullYear() + " 00:00:00").getTime();
    const dstart = new Date("12/01/" + now.getFullYear() + " 00:00:00").getTime();
    const mlenght = (dstart-nstart);
    function NNN() {
        const now_ms = Date.now();
        const until = (dstart-now_ms);
        const until_now = (dstart-nstart)-until;
        
        // November
        if(now.getMonth()==10) {
            $('.percents').show();
            $('.data').show();
            $('.time_left').html(msToHMS(until) + " hours left");
            $('.percents').html(percentage(until_now, mlenght).toFixed(5) + "%");
            setTimeout(NNN, 1000);
        // November about to begin
        } else if(now.getMonth()==9) {
            $('.time_left').html(msToHMS(nstart-now_ms));
            $('.data').show();
            $('.data').html("hours left to start");
        // November ended
        } else if (now.getMonth()==11 && now.getDate()<4) {
            $('.time_left').html("NNN just ended.");
        // 
        } else if (now.getMonth()>=11 && now.getDate()>4) {
            $('.time_left').html("this years NNN ended");
            $('.data').show();
            $('.data').html("until next time.");
        } else if (now.getMonth()<9) {
            if(9-now.getMonth()==1) {
                $('.time_left').html(9-now.getMonth() + " month left");
            } else {
                $('.time_left').html(9-now.getMonth() + " months left");
            }
        };
    };
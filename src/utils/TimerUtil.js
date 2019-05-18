const TimerUtil = {
    getCountdownString(seconds) {
        let days = Math.floor(seconds/24/60/60);
        let hoursLeft   = Math.floor((seconds) - (days*86400));
        let hours       = Math.floor(hoursLeft/3600);
        let minutesLeft = Math.floor((hoursLeft) - (hours*3600));
        let minutes     = Math.floor(minutesLeft/60);
        let remainingSeconds = seconds % 60;
        function pad(n) {
            return (n < 10 ? "0" + n : n);
          }
        return pad(days) + " days " + pad(hours) + " hours " + pad(minutes) + " mins " + pad(remainingSeconds) + " seconds";
    }
}

export default TimerUtil;
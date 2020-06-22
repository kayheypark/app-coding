window.onload = function() {
    
    //시간정보 불러옴
    setInterval(function(){
        var d = new Date();
        var sysHr = addZero(d.getHours(),2);
        var sysMin = addZero(d.getMinutes(),2);

        var areaHr = document.getElementById('header-time-hr');
        var areaMin = document.getElementById('header-time-min');

        
        var time = function (){
            areaHr.innerHTML = sysHr;
            areaMin.innerHTML = sysMin;
            addZero(sysHr, 9);
        }
        time();
    },1000)

    function addZero (num, digit) {
        var zero = '';
        num  = num.toString();

        if (num.length < digit) {
            for (i = 0; i < digit - num.length; i++) {
                zero += '0';
            }

        }
        return zero + num;
    }
    
}// 독레디 닫기

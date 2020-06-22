window.onload = function() {
    
    //시간정보 불러옴
    setInterval(function(){
        var d = new Date();
        var sysYr = d.getFullYear();
        var sysMth = d.getMonth()-1;
        var sysHr = addZero(d.getHours(),2);
        var sysMin = addZero(d.getMinutes(),2);

        //상태바 시계영역
        var areaHr = document.getElementById('header-time-hr');
        var areaMin = document.getElementById('header-time-min');

        //홈, 일정 페이지
        //월, 연도 영역
        var areaYr = document.getElementById('header-home-time-year');
        var areaMth = document.getElementById('header-home-time-month');
        
        var refreshZero = function (){
            areaHr.innerHTML = sysHr;
            areaMin.innerHTML = sysMin;
            addZero(sysHr, 9);
        }
        refreshZero();

        var refresh = function (){
            areaYr.innerHTML = sysYr;
            areaMth.innerHTML = sysMth;
        }
        refresh();


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



    
}// 온로드 닫기

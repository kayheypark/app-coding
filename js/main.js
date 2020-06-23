window.onload = function() {
    
    //시간정보 불러옴
    setInterval(function (){
        var d = new Date();
        var sysYr = d.getFullYear();
        var sysMth = d.getMonth()+1;
        var sysDay = dayToString(d.getDay());
        var sysDate = d.getDate();
        var sysHr = addZero(d.getHours(),2);
        var sysMin = addZero(d.getMinutes(),2);
        

        //상태바 시계영역
        var areaHr = document.getElementById('header-time-hr');
        var areaMin = document.getElementById('header-time-min');

        //홈, 일정 페이지
        //월, 연도 영역
        var areaYr = document.getElementById('header-home-time-year');
        var areaMth = document.getElementById('header-home-time-month');

        //달력 영역
        var areaDay1 = $('#home-calendar-day th').eq(1);
        var areaDay2 = $('#home-calendar-day th').eq(2);
        var areaDay3 = $('#home-calendar-day th').eq(3);
        var areaDay4 = $('#home-calendar-day th').eq(4);
        var areaDay5 = $('#home-calendar-day th').eq(5);
        var areaDay6 = $('#home-calendar-day th').eq(6);
        var areaDay7 = $('#home-calendar-day th').eq(7);

        var areaDate1 = $('#home-calendar-date td span').eq(0);
        var areaDate2 = $('#home-calendar-date td').eq(1);
        var areaDate3 = $('#home-calendar-date td').eq(2);
        var areaDate4 = $('#home-calendar-date td').eq(3);
        var areaDate5 = $('#home-calendar-date td').eq(4);
        var areaDate6 = $('#home-calendar-date td').eq(5);
        var areaDate7 = $('#home-calendar-date td').eq(6);

        $(areaDay1).html(sysDay);
        $(areaDay2).html(dayToString(d.getDay()+1));
        $(areaDay3).html(dayToString(d.getDay()+2));
        $(areaDay4).html(dayToString(d.getDay()+3));
        $(areaDay5).html(dayToString(d.getDay()+4));
        $(areaDay6).html(dayToString(d.getDay()+5));
        $(areaDay7).html(dayToString(d.getDay()+6));

        $(areaDate1).html(sysDate);
        $(areaDate2).html(sysDate+1);
        $(areaDate3).html(sysDate+2);
        $(areaDate4).html(sysDate+3);
        $(areaDate5).html(sysDate+4);
        $(areaDate6).html(sysDate+5);
        $(areaDate7).html(sysDate+6);
        
        
        $(areaYr).html(sysYr);
        $(areaMth).html(sysMth);
        
        var statusTime = function (){
            areaHr.innerHTML = sysHr;
            areaMin.innerHTML = sysMin;
        }
        statusTime();


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

    function dayToString (day){
        day = day % 7;
        switch (day){
            case 0 : day = '일'; break;
            case 1 : day = '월'; break;
            case 2 : day = '화'; break;
            case 3 : day = '수'; break;
            case 4 : day = '목'; break;
            case 5 : day = '금'; break;
            case 6 : day = '토'; break;
            default : alert("요일정보를 불러올 수 없습니다. 요일 : " + day);
        }

        return day;
    }

    function compare (prev, now){
        switch (prev){
            case '일' : now = '월'; break;
            case '월' : now = '화'; break;
            case '화' : now = '수'; break;
            case '수' : now = '목'; break;
            case '목' : now = '금'; break;
            case '금' : now = '토'; break;
            case '토' : now = '일'; break;
            default : alert("요일정보를 불러올 수 없습니다. (어제 정보 오류) 요일 : " + prev);
        }

    }
    
    


    
}// 온로드 닫기

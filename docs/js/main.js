window.onload = function() {
   
   
    refreshSTB();
    //시간정보 불러옴

    function refreshSTB(){
        var d = new Date();
        var sysHr = addZero(d.getHours(),2);
        var sysMin = addZero(d.getMinutes(),2);

        //상태바 시계영역
        var areaHr = document.getElementById('header-time-hr');
        var areaMin = document.getElementById('header-time-min');

            areaHr.innerHTML = sysHr;
            areaMin.innerHTML = sysMin;
    };
            setInterval(function (){
                var d = new Date();
                var sysHr = addZero(d.getHours(),2);
                var sysMin = addZero(d.getMinutes(),2);
        
                //상태바 시계영역
                var areaHr = document.getElementById('header-time-hr');
                var areaMin = document.getElementById('header-time-min');
        
                    areaHr.innerHTML = sysHr;
                    areaMin.innerHTML = sysMin;
        
            },1000)
 

    //시간:분 외 시간정보 불러옴
    function refreshTime (){
        var d = new Date();
        var sysYr = d.getFullYear();
        var sysMth = d.getMonth()+1;
        var sysDay = dayToString(d.getDay());
        var sysDate = d.getDate();

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
        
 }// 펑션 리프레시 타임
 refreshTime();



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
    
    //달력 전환
    var flag=0;
    $("#home-calendar-btn").click(function(){
        if(flag==0){ //주력 -> 달력 전환
            //파란창
            $(".home-calendar-week-div").removeClass("on");
            $(".home-calendar-week-div").addClass("on");

            //컨테이너
            $("#container").removeClass("on");
            $("#container").addClass("on");

            //버튼이미지
            $("#home-calendar-btn").attr("src", "./img/home-week-btn.png");

            //요일 정렬
            var allTh = [$("#home-calendar-day th")];
            // var realTh = allTh.slice(1,6);
            // console.log(allTh);
            // console.log(realTh);

            var areaDay1 = $('#home-calendar-day th').eq(1);
            var areaDay2 = $('#home-calendar-day th').eq(2);
            var areaDay3 = $('#home-calendar-day th').eq(3);
            var areaDay4 = $('#home-calendar-day th').eq(4);
            var areaDay5 = $('#home-calendar-day th').eq(5);
            var areaDay6 = $('#home-calendar-day th').eq(6);
            var areaDay7 = $('#home-calendar-day th').eq(7);

            $(areaDay1).html("일");
            $(areaDay2).html("월");
            $(areaDay3).html("화");
            $(areaDay4).html("수");
            $(areaDay5).html("목");
            $(areaDay6).html("금");
            $(areaDay7).html("토");
            
            
            flag=1;
        } else { // (복귀) 달력 -> 주력 전환 
            //파란창
            $(".home-calendar-week-div").addClass("on");
            $(".home-calendar-week-div").removeClass("on");
            
            //컨테이너
            $("#container").addClass("on");
            $("#container").removeClass("on");
            
            //버튼이미지
            $("#home-calendar-btn").attr("src", "./img/home-calendar-btn.png");
            
            //요일 정렬

            refreshTime();
            flag=0;
        }

        return flag;
    })

setInterval(function(){
    console.log(flag);

},1000);





    
}// 온로드 닫기

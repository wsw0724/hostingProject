let hanArr = ['열','한','다','세','네','두','여','섯','일','곱','여'
    ,'덟','아','홉','시','자','정','이','삼','십','사'
    ,'오','십','오','분'];
let idArr = ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11','c12','c13','c14','c15','c16','c17','c18','c19','c20','c21','c22',
            'c23','c24', 'c25'];
setInterval(HanClock, 1000);
function HanClock(){  
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    for(let i = 0;i<25;i++){
        document.getElementById(idArr[i]).innerHTML = hanArr[i];
    }
    
    document.getElementById('c15').innerHTML = "<span style='color:black'>" + "시" + "</span>";
    if(minute>=5){
        document.getElementById('c25').innerHTML = "<span style='color:black'>" + "분" + "</span>";
    }
    if(hour>12){
        hour-=12;
    }
    switch(hour){
        case 1 : document.getElementById('c2').innerHTML = "<span style='color:black'>" + '한' + "</span>";break;
        case 2 : document.getElementById('c6').innerHTML = "<span style='color:black'>" + '두' + "</span>";break;
        case 3 : document.getElementById('c4').innerHTML = "<span style='color:black'>" + '세' + "</span>";break;
        case 4 : document.getElementById('c5').innerHTML = "<span style='color:black'>" + '네' + "</span>";break;
        case 5 : document.getElementById('c3').innerHTML = "<span style='color:black'>" + '다' + "</span>";
                 document.getElementById('c8').innerHTML = "<span style='color:black'>" + '섯' + "</span>";break;
        case 6 : document.getElementById('c7').innerHTML = "<span style='color:black'>" + '여' + "</span>";
                 document.getElementById('c8').innerHTML = "<span style='color:black'>" + '섯' + "</span>";break;
        case 7 : document.getElementById('c9').innerHTML = "<span style='color:black'>" + '일' + "</span>";
                 document.getElementById('c10').innerHTML = "<span style='color:black'>" + '곱' + "</span>";break;
        case 8 : document.getElementById('c11').innerHTML = "<span style='color:black'>" + '여' + "</span>";
                 document.getElementById('c12').innerHTML = "<span style='color:black'>" + '덟' + "</span>";break;
        case 9 : document.getElementById('c13').innerHTML = "<span style='color:black'>" + '아' + "</span>";
                 document.getElementById('c14').innerHTML = "<span style='color:black'>" + '홉' + "</span>";break;
        case 10 : document.getElementById('c1').innerHTML = "<span style='color:black'>" + '열' + "</span>";break;
        case 11 : document.getElementById('c1').innerHTML = "<span style='color:black'>" + '열' + "</span>";
                  document.getElementById('c2').innerHTML = "<span style='color:black'>" + '한' + "</span>";break;
        case 12 : document.getElementById('c1').innerHTML = "<span style='color:black'>" + '열' + "</span>";
                  document.getElementById('c6').innerHTML = "<span style='color:black'>" + '두' + "</span>";break;
    }
    if(minute % 10 >=5){
        document.getElementById('c24').innerHTML = "<span style='color:black'>" + '오' + "</span>";
    }
    minute = parseInt(minute/10);
    if(minute*10 >= 10){
        if(minute==3 || minute == 2){
            document.getElementById('c20').innerHTML = "<span style='color:black'>" + '십' + "</span>";
        }
        else{
            document.getElementById('c23').innerHTML = "<span style='color:black'>" + '십' + "</span>";
        }
    }
    //console.log(minute/10);
    switch(minute){
        case 2 : document.getElementById('c18').innerHTML = "<span style='color:black'>" + '이' + "</span>"; break;
        case 3 : document.getElementById('c19').innerHTML = "<span style='color:black'>" + '삼' + "</span>"; break;
        case 4 : document.getElementById('c21').innerHTML = "<span style='color:black'>" + '사' + "</span>"; break;
        case 5 : document.getElementById('c22').innerHTML = "<span style='color:black'>" + '오' + "</span>"; break;
    }
    if(hour == 0){
        document.getElementById('c16').innerHTML = "<span style='color:black'>" + '자' + "</span>";
        document.getElementById('c17').innerHTML = "<span style='color:black'>" + '정' + "</span>";
    }
}
function geubyeo() {
     // 급여 계산 (세금은 10%)
    document.getElementById("geubyeo").onclick = function() {

    var a = parseInt(document.getElementById("geubyeo1").value); // 본봉
    var b = parseInt(document.getElementById("geubyeo2").value); // 수당
    
    // 세금(10 %) : 본봉+수당*0.1 
    var c = (a+b) * 0.1;
    
    // 본봉 + 수당 - 세금 (세금한 제한 월급)
    var result = a + b - c;

    alert("이달 월급으로 수령한 금액은 " + result + "원 입니다.");
  };
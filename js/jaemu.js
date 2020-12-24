  // 총 판매 이익금 계산
  window.onload = function() {
    document.getElementById("jaemu").onclick = function() {

    var a = parseInt(document.getElementById("jaemu1").value); // 판매가격
    var b = parseFloat(document.getElementById("jaemu2").value); // 이익률
    var c = parseInt(document.getElementById("jaemu3").value); // 총판매수

    //판매가격 * 이익률 * 총판매수
    var result = a * b * c;

    alert("총 판매이익은 " + result + "원 입니다.");
  }
};

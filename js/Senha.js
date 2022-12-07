function clickComum() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "C-0" + localStorage.clickcount + "";
    }
  }
 
function clickPrioritario() {
  
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number (localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "P-0" + localStorage.clickcount + "";
    } 
  }

  function cleanUp(){
    localStorage.clickcount=0;

}

localStorage.setItem('clickPrioritario', clickComum);
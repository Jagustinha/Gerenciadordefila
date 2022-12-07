function clickComum() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "C0" + localStorage.clickcount + "";
    }
  }
 

  function clickPrioritario() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number (localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "P0" + localStorage.clickcount + "";
      

    } 


  }
    function cleanUp(){
    localStorage.clickcount=0;
}


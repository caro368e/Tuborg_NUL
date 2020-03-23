window.addEventListener("load", navShow);
window.addEventListener("DOMContentLoaded", slideGo);

let points;
let liv;
let random;
var used = [];

function navShow() {
  console.log("navShow");
  document.querySelector("#burger").addEventListener("click", burgerClick);
  document.querySelector("#spil_knap").addEventListener("click", startSpil);
}

function burgerClick() {
  console.log("burgerClick");
  document.querySelector("#burger").classList.toggle("open");
  document.querySelector(".nav_links").classList.toggle("drop");
  document.querySelector(".nav_links").addEventListener("click", burgerLuk);
}

function burgerLuk() {
  document.querySelector("#burger").classList.toggle("open");
  document.querySelector(".nav_links").classList.toggle("drop");
}

function slideGo() {
  document.querySelector("#slide").src = "img/bonfire.jpg";
  window.setTimeout(slideTo, 3000);
}

function slideTo() {
  document.querySelector("#slide").src = "img/koncert.jpg";
  window.setTimeout(slideTre, 3000);
}

function slideTre() {
  document.querySelector("#slide").src = "img/venner.jpg";
  window.setTimeout(slideFire, 3000);
}

function slideFire() {
  document.querySelector("#slide").src = "img/mountains.png";
  window.setTimeout(slideFem, 3000);
}

function slideFem() {
  document.querySelector("#slide").src = "img/picnic_forest.jpg";
  window.setTimeout(slideSeks, 3000);
}

function slideSeks() {
  document.querySelector("#slide").src = "img/festival.jpg";
  window.setTimeout(slideGo, 3000);
}



function startSpil() {
  console.log("spil starter");

  document.querySelector("#start").classList.add("hide2");
  document.querySelector("#game_over").classList.add("hide2");
  points = 0;
  liv = 3;
  used = [];

  document.querySelector("#point").innerHTML = "0/12";


  document.querySelector("#liv0").classList.remove("dead");
  document.querySelector("#liv1").classList.remove("dead");
  document.querySelector("#liv2").classList.remove("dead");

  document.querySelector("#instruktion").classList.remove("hide");

  window.setTimeout(begynd, 6000);
}

function begynd() {

  document.querySelector("#instruktion").classList.add("hide");

  spil();
}

var clickHandlerBad = function badClick() {

  document.querySelector("#ord_bad_c" + random).classList.add("hide");
  document.querySelector("#bad_svar_" + random).classList.remove("hide");
  liv--;
  document.querySelector("#liv" + liv).classList.add("dead");
}

var clickHandlerGod = function godClick() {

  document.querySelector("#ord_god_c" + random).classList.removeAll
  document.querySelector("#ord_god_c" + random).classList.add("valgt");
  points++;
  document.querySelector("#point").innerHTML = points + "/12";
}

function spil() {

  random = Math.floor(Math.random() * 20) + 1;
  console.log(random);
  console.log(used);
  if (used.length == 20) {
    slutSpil();
  } else if (used.includes(random)) {
    spil();
  } else {
    used.push(random);

    if (random > 12) {
      console.log("Dårligt ord");

      document.querySelector("#ord_bad_c" + random).classList.remove("hide");
      document.querySelector("#ord_bad_c" + random).classList.add("fade");

      document.querySelector("#ord_bad_c" + random).addEventListener("click", clickHandlerBad);

      window.setTimeout(() => {
        document.querySelector("#ord_bad_c" + random).classList.removeAll;
        document.querySelector("#ord_bad_c" + random).classList.add("hide");
        document.querySelector("#bad_svar_" + random).classList.add("hide");
        document.querySelector("#ord_bad_c" + random).removeEventListener("click", clickHandlerBad);
        if (liv <= 0) {
          slutSpil();
        } else {
          spil();
        }
      }, 5500);
    }
    if (random <= 12) {
      console.log("Godt ord");

      document.querySelector("#ord_god_c" + random).classList.remove("hide");
      document.querySelector("#ord_god_c" + random).classList.add("fade");

      document.querySelector("#ord_god_c" + random).addEventListener("click", clickHandlerGod);

      window.setTimeout(() => {
        document.querySelector("#ord_god_c" + random).classList.removeAll;
        document.querySelector("#ord_god_c" + random).classList.add("hide");
        document.querySelector("#ord_god_c" + random).classList.remove("valgt");
        document.querySelector("#ord_god_c" + random).classList.add("pos" + random);
        document.querySelector("#ord_god_c" + random).removeEventListener("click", clickHandlerGod);
        if (points >= 12) {
          slutSpil();
        } else {
          spil();
        }
      }, 2500);

    }
  }
}


function slutSpil() {
  document.querySelector("#game_over").classList.remove("hide2");
  document.querySelector("#spil_igen").addEventListener("click", startSpil);

  document.querySelector("#ord_god_c1").classList.add("hide");
  document.querySelector("#ord_god_c2").classList.add("hide");
  document.querySelector("#ord_god_c3").classList.add("hide");
  document.querySelector("#ord_god_c4").classList.add("hide");
  document.querySelector("#ord_god_c5").classList.add("hide");
  document.querySelector("#ord_god_c6").classList.add("hide");
  document.querySelector("#ord_god_c7").classList.add("hide");
  document.querySelector("#ord_god_c8").classList.add("hide");
  document.querySelector("#ord_god_c9").classList.add("hide");
  document.querySelector("#ord_god_c10").classList.add("hide");
  document.querySelector("#ord_god_c11").classList.add("hide");
  document.querySelector("#ord_god_c12").classList.add("hide");
  document.querySelector("#ord_bad_c13").classList.add("hide");
  document.querySelector("#ord_bad_c14").classList.add("hide");
  document.querySelector("#ord_bad_c15").classList.add("hide");
  document.querySelector("#ord_bad_c16").classList.add("hide");
  document.querySelector("#ord_bad_c17").classList.add("hide");
  document.querySelector("#ord_bad_c18").classList.add("hide");
  document.querySelector("#ord_bad_c19").classList.add("hide");
  document.querySelector("#ord_bad_c20").classList.add("hide");
  document.querySelector("#bad_svar_13").classList.add("hide");
  document.querySelector("#bad_svar_14").classList.add("hide");
  document.querySelector("#bad_svar_15").classList.add("hide");
  document.querySelector("#bad_svar_16").classList.add("hide");
  document.querySelector("#bad_svar_17").classList.add("hide");
  document.querySelector("#bad_svar_18").classList.add("hide");
  document.querySelector("#bad_svar_19").classList.add("hide");
  document.querySelector("#bad_svar_20").classList.add("hide");
  document.querySelector("#ord_god_c1").classList.add("pos1");
  document.querySelector("#ord_god_c2").classList.add("pos2");
  document.querySelector("#ord_god_c3").classList.add("pos3");
  document.querySelector("#ord_god_c4").classList.add("pos4");
  document.querySelector("#ord_god_c5").classList.add("pos5");
  document.querySelector("#ord_god_c6").classList.add("pos6");
  document.querySelector("#ord_god_c7").classList.add("pos7");
  document.querySelector("#ord_god_c8").classList.add("pos8");
  document.querySelector("#ord_god_c9").classList.add("pos9");
  document.querySelector("#ord_god_c10").classList.add("pos10");
  document.querySelector("#ord_god_c11").classList.add("pos11");
  document.querySelector("#ord_god_c12").classList.add("pos12");
  document.querySelector("#ord_bad_c13").classList.add("pos13");
  document.querySelector("#ord_bad_c14").classList.add("pos14");
  document.querySelector("#ord_bad_c15").classList.add("pos15");
  document.querySelector("#ord_bad_c16").classList.add("pos16");
  document.querySelector("#ord_bad_c17").classList.add("pos17");
  document.querySelector("#ord_bad_c18").classList.add("pos18");
  document.querySelector("#ord_bad_c19").classList.add("pos19");
  document.querySelector("#ord_bad_c20").classList.add("pos20");
}

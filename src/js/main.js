let $leftButton = $("#left-button");
let $rightButton = $("#right-button");
let $title = $("#title");
let $body = $("body");
let $content = $("#content");
let $html = $("html");

let index = 0;
let titles = [
  "<u><a href=\"https:\\\\wikispeedia.herokuapp.com\" id=\"title-link\">Wikispeedia</a></u>",
  "Maps",
  "CubeSAT",
  "Hubway Map",
  "Music Visuals",
  "Polarization Study"];
  
let backgroundColors = ["#cb356b", "#bd3f32"];

let r1 = 255;
let g1 = 81;
let b1 = 47;
let r2 = 221;
let g2 = 36;
let b2 = 118;

$(document).ready(() => {
  updateContent();
});

$leftButton.on("click", () => {
  index -= 1;
  updateContent();
});

$rightButton.on("click", () => {
  index += 1;
  updateContent();
});

function updateContent() {
  let ra = Math.floor(r1 + (r2 - r1) * (1 / titles.length) * (index + 1.7));
  let ga = Math.floor(g1 + (g2 - g1) * (1 / titles.length) * (index + 1.7));
  let ba = Math.floor(b1 + (b2 - b1) * (1 / titles.length) * (index + 1.7));

  let rb = Math.floor(r1 + (r2 - r1) * (1 / titles.length) * index);
  let gb = Math.floor(g1 + (g2 - g1) * (1 / titles.length) * index);
  let bb = Math.floor(b1 + (b2 - b1) * (1 / titles.length) * index);

  console.log(ra);
  console.log(ga);
  console.log(ba);
  console.log(rb);
  console.log(gb);
  console.log(bb);

  document.body.style.backgroundImage = `linear-gradient(to left, rgb(${ra}, ${ga}, ${ba}) , rgb(${rb}, ${gb}, ${bb}))`;

  if (index == 0) {
    $leftButton.prop('disabled', true);
  } else {
    $leftButton.prop('disabled', false);
  }

  if (index == titles.length - 1) {
    $rightButton.prop('disabled', true);
  } else {
    $rightButton.prop('disabled', false);
  }

  $title.html(`<b>${titles[index]}</b> (${index + 1} of ${titles.length})`);
}

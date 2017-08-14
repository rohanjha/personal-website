let $leftButton = $("#left-button");
let $rightButton = $("#right-button");

let index = 0;
let titleIds = ["wikispeedia-title", "maps-title", "cubesat-title", "hubway-title", "music-title", "polarization-title"];
let contentIds = ["wikispeedia-content", "maps-content", "cubesat-content", "hubway-content", "music-content", "polarization-content"];

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
  if (index == 0) {
    $leftButton.prop('disabled', true);
  } else {
    $leftButton.prop('disabled', false);
  }

  if (index == titleIds.length - 1) {
    $rightButton.prop('disabled', true);
  } else {
    $rightButton.prop('disabled', false);
  }

  for (let i = 0; i < titleIds.length; i++) {
    $title = $("#" + titleIds[i]);
    if (i != index) {
      $title.hide();
    } else {
      $title.show();
    }
  }

  for (let i = 0; i < contentIds.length; i++) {
    $content = $("#" + contentIds[i]);
    if (i != index) {
      $content.hide();
    } else {
      $content.show();
    }
  }
}

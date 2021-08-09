
//RETRY

const PALETTE = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "white",
  "black",
];

function makePalette() {
  //for the palette
  for (let i = 0; i < PALETTE.length; i++) {
    // let button = $('<button>');
    // button.css('backgroundColor', PALETTE[i]);
    // $('.palette').append(button);

    //const nextColor = PALETTE[i];
    // console.log(PALETTE[i]);
    let button = $("<button>");
    $(".palette").append(button.css("backgroundColor", PALETTE[i]));
  }

  $(".palette button").first().addClass("active");
}
makePalette();

function makeGrid() {
  // for the grid
  for (let i = 0; i < 64; i++) {
    $(".grid").append('<div class="cell"></div>');
  }
}
makeGrid();

function onPaletteClick() {
  // ($('button').hasClass('active')) ? $('button').removeClass('active') : $('button').addClass('active');
  $(".palette .active").removeClass("active");
  $(this).addClass("active");
}

$(".palette button").click(onPaletteClick);

function onGridClick() {
	let cell = $(this).css('backgroundColor')
let activeColor = $(".palette .active").css("backgroundColor");
  // console.log(activeColor)
  $(this).css("backgroundColor", activeColor);
	if (cell === activeColor){
		$(this).css('backgroundColor', '')
	}else {
		$(this).css('backgroundColor', activeColor)
	}

	
}
$(".grid .cell").click(onGridClick);

function onClearClick() {
  $(".grid .cell").css("backgroundColor", "");
}
$(".controls .clear").click(onClearClick);

function onFillAll() {
  let activeColor = $(".palette .active").css("backgroundColor");
  $(".grid .cell").css("backgroundColor", activeColor);
}
$(".controls .fill-all").click(onFillAll);

function onFillEmptyClick() {
	let activeColor = $('.palette .active').css('backgroundColor');
	let cells = $('.cell');
	//console.log(activeColor)
	for (let i = 0; i < cells.length; i++){
		let cell = cells[i];
		if ($(cell).css('backgroundColor') === 'rgba(0, 0, 0, 0)'){
			$(cell).css('backgroundColor', activeColor)
		}
	}

}
$(".controls .fill-empty").click(onFillEmptyClick);


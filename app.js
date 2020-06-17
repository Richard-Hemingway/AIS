/* This function toggles boxes on and off when you click the top row of buttons.
If 4 or more boxes are hidden then it makes the remaining boxes taller.
Slightly oddly it does this by counting the number of buttons with the "off" class
rather than counting the number of divs set with "display:none".
In reality if those are not equivalent then something is very wrong! */
$('button[class="toggle"]').click(function() {
    let itemid = ('#item' + this.id);
    $(itemid).toggle();
    $('#' + this.id).toggleClass('off');
    var hiddendivs = $( ".off" ).length; //Checks how many boxes are hidden
    if (hiddendivs >= 4) {
        $( ".iframe" ).addClass("talliframes");
    } else {
        $( ".iframe" ).removeClass("talliframes");
    }
});

/* This generates a prompt for a URL when you click the "Custom" tab and adds
the necessary html in. The suppress variable will kill the prompts when set to true (by pressing button) */
let suppress = false;

$('a[href$="3"]').click(function() {
    let targetid = $(this).attr("href");
    if (suppress === false) {
        let url = prompt("Please enter full URl (not including http://)");
        if (url === null){
            return;
        }
        $( targetid ).empty();
        $( targetid ).append( '<iframe src="http://' + url + '" /></iframe>');
    }
});

/* Flips boolean value of "suppress" on click and changes the text. */
$('button[id="suppress"]').click(function() {
    suppress =! suppress;
    if (suppress === false) {
        $( "#suppress" ).html("Suppress Custom Tab Prompts");
    } else if (suppress === true) {
        $ ( "#suppress" ).html("Allow Custom Tab Prompts");
    }
})

// These write in the urls for the two "standard" tabs. Change here to change everywhere.
$('div[class="iframe"][id$="1"]').append( '<iframe src="https://www.issf-sports.org/athletes.ashx" /></iframe>');
$('div[class="iframe"][id$="2"]').append( '<iframe src="https://en.m.wikipedia.org" /></iframe>');

/* Initialises the tabs functionality within jQueryUI for each box.
At some point this will run a "foreach" and allow an arbitrary number of boxes rather than being hardcoded. */
$( function() {
    $( "#tabs1" ).tabs();
    $( "#tabs2" ).tabs();
    $( "#tabs3" ).tabs();
    $( "#tabs4" ).tabs();
    $( "#tabs5" ).tabs();
    $( "#tabs6" ).tabs();
    $( "#tabs7" ).tabs();
    $( "#tabs8" ).tabs();
    $( "#1" ).button();
    $( "#2" ).button();
    $( "#3" ).button();
    $( "#4" ).button();
    $( "#5" ).button();
    $( "#6" ).button();
    $( "#7" ).button();
    $( "#8" ).button();
    $( "#suppress" ).button();
});

$('#keyboard-upper-container').hide()


//switch keyboard when shift key pressed
var keyboardlower = '#keyboard-lower-container';
var keyboardupper = '#keyboard-upper-container';

$(document).keydown(function(e) {
    if(e.which == 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
        body.appendChild();
    }
})

//highlight key when pressed 
('span #well well-lg key').attr('id') {

$(document).keypress(function(e){
    var kpressed = e.which
    $('#' + kpressed).css('bacground-color, yellow');
}

    



fromCharCode  returns actual character

 charCodeAt(0) returns ascii 


//lowerKeyBoard.addEventListener('shiftKey', function({
//    keyboardupper.hide();
//    keyboardlower.show();
//})

// if (event.shiftKey==1) {
//    $('#keyboard-upper-container').hide();
//    $('#keyboard-lower-container').show();
// } else {
//     $('#keyboard-lower-container').hide();
//     $('#keyboard-upper-container').hide();
// }

// if (e.shiftKey){
//     $('#keyboard-upper-container').hide();
//     $('keyboard-lower-container').show();
// };

//<div class="text-center keyboard-container" id="keyboard-upper-container">
//<div class="text-center keyboard-container" id="keyboard-lower-container">


$(element).on ('keypress', function (e) {
    console.log(String.fromCharCode(e.which));
})

$(function () {
    var $kp = $('#keyPress');
    var $kpc = $('#kpc');

    $(document).on ('keypress', function (e) {
        $kp.val(String.fromCharCode(e.which));
        $kpc.val(e.which);
        if ("$kpc" = (this).attr(id)){
            $('.well well-lg key').css('background-color', yellow);
        };
 });

 

$('.well well-lg key').css(background-color, yellow){
    if ( id === id of keypressed ascii character
}

//Sentence Loop
var $sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

for (var i = 0; i < $sentences.length; i++) {
    $("div #sentence").innerText(i);
}





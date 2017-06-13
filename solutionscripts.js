

var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var sentence = sentences[0];
//sentence.length
//charAt[0]=t??
var i = 0
var j = 0
//var letters = sentences.split('');
//var $i = $letters[0];
var $keylower = '#keyboard-lower-container';
var $keyupper = '#keyboard-upper-container';

$('#keyboard-upper-container').hide()     //hide one keyboard
$('#sentence').text(sentences[0]);        //add sentences to div at top
$('#target-letter').text(sentences[0][0]);//add letters to lil div

//switch keyboard when shift key pressed
$(document).keydown(function(e) {
    if(e.which == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
})

$(document).keyup(function(e){
    $('.key').css('background-color', '#f5f5f5');
    $('#target-letter').charAt(sentence[i]);
    if(e.which == 16) {
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();
    }    
})

$(document).keypress(function(e){
    var kpressed = e.which
    $('#' + kpressed).css('background-color', 'yellow');
    $('#target-letter').text(' ');
});

// $(document).keyup(function(e){
//     $('.key').css('background-color', '#f5f5f5');
//         if ($i=0; i < $letters.length; i++) {
//             $('#target-letter').text($letters[i])
//         };   
// });




//sentences





//div display expected letter in center (div id="target-letter")





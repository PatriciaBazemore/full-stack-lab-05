var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var sentenceIndex = 0;
var letterIndex = 0;
var currentSentence = sentences[0];
var currentLetter = currentSentence.charAt(0); // = currentSentence[0]
var errorCount = 0;

var startTime;


function toggleKeyboards() {   //add toggleKeyboards in above functions)
    $('#keyboard-upper-container').toggle();
    $('#keyboard-lower-container').toggle();
}

$('#keyboard-upper-container').hide();     //hide one keyboard
$('#sentence').text(currentSentence);        //add sentences to div at top
$('#target-letter').text(currentLetter);//add letters to lil div

$(document).keydown(function(e) { //takes one argument=function e lets us capture dats, which key
    if(e.which == 16) {
 //     $('#keyboard-upper-container').show();
 //     $('#keyboard-lower-container').hide();
        toggleKeyboards(); //if you use, comment out two previous lines CALL THE FUNCTION
    }
});

$(document).keyup(function(e){
//  $('.key').css('background-color', '#f5f5f5');
    $('.highlighted').removeClass("highlighted");
    $('#target-letter').charAt(sentence[0]);  //WHAT SHOULD I BE
    if(e.which == 16) {   ///16 = shift
//      $('#keyboard-lower-container').show();
//      $('#keyboard-upper-container').hide();
        toggleKeyboards();  //if you use, comment out two previous lines CALL THE FUNCTION
    }    
});

$(document).keypress(function(e){
//  $('#' + e.which).css('background-color', 'yellow');
    event.preventDefault(); //keeps from scrolling with spacebar/default action 
    $('#' + e.which).addClass('highlighted');
//    var timestart = e.getTime(0); 
     console.log(event);
    if (!startTime) {  //if i don't have a startTime value
        startTime = event.timeStamp;  //i give it a start time to run
    }
 
    if (event.which === currentLetter.charCodeAt(0)){ ///keypress matches current key?
       $('#feedback').append('<span class="glyphicon glyphicon-ok"></span');  //creates green check
       } else {
         $('#feedback').append('<span class="glyphicon glyphicon-remove"></span');
         errorCount++;
         }
    letterIndex++;  ////increases this by 1, next letter!

      if (letterIndex === currentSentence.length) {  //if we are at end of current sentence
           //move to the next sentence
         sentenceIndex++;
         $('#feedback').text(" "); //empty();
        
        if (sentenceIndex === sentences.length) { //we are out of sentences; done
          //end of the game, compute wpm, show alert, etc.
//          var timeend = new Date().getTime();
//          alert('You are done!'+ wpm / (timeend - timestart) - 2 *                     errorCount);
            var endTime = event.timeStamp;
            var elapsedMinutes = (endTime - startTime) / (60 * 1000);
            var wpm = 54 / elapsedMinutes - 2 * errorCount;
            $('#feedback').text('You scored ' + wpm + ' words per minute.');
            setTimeout(function(){
                if (confirm('Would you like to play again?')){
                    sentenceIndex = 0;
                    letterIndex = 0;
                    currentSentence = sentences[0];
                    currentLetter = currentSentence[0];
                    $('#sentence').text(currentSentence);
                    $('#target-letter').text(currentLetter);
                    $('#feedback').empty();
                    startTime = undefined;
                   // $('#yellow-block').css('left', '15px');
                    $('#yellow-block').animate({'left': '15px'});
                }
            }, 2000); //run once 2000 milliseconds has passed  

         } else {
            // there's at least one more sentence
            //move on to the next sentence 
           currentSentence = sentences[sentenceIndex];
           $('#sentence').text(currentSentence);
             //reset the letter back to the first position
           letterIndex = 0;
           currentLetter = currentSentence.charAt(letterIndex);
           $('#target-letter').text(currentLetter);
           //$('#yellow-block').css('left', '15px');//put it to where left edge is 15px from edge of container
           $('#yellow-block').animate({'left': '15px'});
           }
     } else {
        //not at the end of sentence, move on to next letter
        currentLetter = currentSentence.charAt(letterIndex);
        $('#target-letter').text(currentLetter); //text of new current letter 
        //TODO: clear out the feedback div (checks and X's)
        $('#yellow-block').css('left', '+=17.5px');//move the left edge to the right 17.5px 
        }   
});

// $(document).keyup(function(e){
//     $('.key').css('background-color', '#f5f5f5');
//         if ($i=0; i < $letters.length; i++) {
//             $('#target-letter').text($letters[i])
//         };   
// });




//sentences





//div display expected letter in center (div id="target-letter")


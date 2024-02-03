var letters = ["if your love were a grain of sand, mine would be a universe of beaches. (*/ω＼*)", "I love you to ions !!! (¬‿¬)", "I love you to the moon and back !!! (●'◡'●)","You have a place in my heart no one else could have." ,"I swear I couldn’t love you more than I do right now, and yet, I know I will tomorrow.","The best love is the kind that awakens the soul. That makes us reach for more, that plants the fire in our hearts and brings peace to our minds. That’s what I hope to give you forever.","I love you, not only for what you are but for what I am when I am with you.", "I want to tell you with my last breath that I have always loved you. I would rather be a ghost, drifting by your side as a condemned soul, than enter heaven without you. Because of your love, I will never be a lonely spirit.", "If I had a flower for every time I thought of you, I could walk through my garden forever.","I’ve never had a moment’s doubt. I love you. I believe in you completely. You are my dearest one. My reason for life." , "Take my hand, take my whole life too, for I can’t help falling in love with you." , "I wish you to know that you have been the last dream of my soul.","I have waited so long for the perfect girl, and my patience has finally paid off.", "You have bewitched me, body and soul, and I love, I love, I love you. I never wish to be parted from you from this day on.", "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.", "I love you more than I have ever found a way to say to you."];

var songs = ["mine.mp3","boy.mp3"];

var p = Math.floor(Math.random() * songs.length);
var audio = new Audio(songs[p]);
  audio.play();


var n = Math.floor(Math.random() * letters.length);
document.querySelector("button").addEventListener("click", function(){ alert(letters[n]); });



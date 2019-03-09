//Hi, the name's Kajiru; Abubakar Kajiru.
//This is a JavaScript file that demonstrates the use of different data constructs to store and display information.
/*The information in question in this case is of one of my favorite songs - 
a simple, undeniably beautiful song, Just the Way You Are by Bruno Mars. */

//Data Representation

var name = "Just the Way You Are";
var artist = "Bruno Mars";
var album = "Doo-Woops & Hooligans";
var duration = "3:41";
var dateReleased = {
    day: 10,
    month: "July",
    year: 2010,
};
var genre = ["pop", "soft rock", "R&B"];
var songwriters = ["Bruno Mars", "Philip Lawrence", "Ari Levine", "Khalil Walton", "Khari Cain"];
var producers = ["The Smeezingtons", "Needlz"];
var label = ["Elektra","Atlantic"];
var reception = {
    nominations: {
        2010: ["The Record of the Year ceremony"],
        2011: ["Billboard Music Awards - Top Hot 100 Song and Top Pop Song", "Teen Choice Awards - Choice Music: Love Song"],
    },
    awards:{
        2011: ["Grammy Awards - Best Male Pop Vocal Performance", "Billboard Music Awards - Top Radio Song", "ASCAP Pop Music Awards - Most Performed Song"],
        2012: ["ASCAP Pop Music Awards - Most Performed Song and Song of the Year", "RTHK International Pop Poll Awards - Top 10 Gold International Gold Songs"],
    },
};

//Data Display.
console.log("Name of Song: " + name + ".");
console.log("Song Artist: " + artist + ".");
console.log("Song Album: " + album + ".");
console.log("Song Duration: " + duration + ".");
console.log("Release Date: " + dateReleased.day + ", " + dateReleased.month + ", " + dateReleased.year + ".");
console.log("Song Genre: " + genre.join(" . ") + ".");
console.log("Songwriters: " + "\n- " + songwriters.join(". \n- ") + ".");
console.log("Producers: " + producers.join(" and ") + ".");
console.log("Production Labels: " + label.join(" . ") + ".");
console.log("RECEPTION: \n" + "\t1. Nominations: \n" + "\t\t 2010: \n\t\t\t> " + reception.nominations[2010]  + "." + "\n\t\t 2011: \n\t\t\t> " 
+ reception.nominations[2011].join(". \n\t\t\t> ") + "." + "\n\t2. Awards: \n" + "\t\t 2011: \n\t\t\t> " + reception.awards[2011].join(". \n\t\t\t> ") + "\n\t\t 2012: \n\t\t\t> " 
+ reception.awards[2012].join(". \n\t\t\t> ") + ".");
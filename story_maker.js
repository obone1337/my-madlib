function makeStory() {
    // get form values (2 points)
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;
    var verb3 = document.getElementById('verb3').value;
    var person1 = document.getElementById('person1').value;
    var person2 = document.getElementById('person2').value;
    var person3 = document.getElementById('person3').value;
    var adj1 = document.getElementById('adj1').value;
    var adj2 = document.getElementById('adj2').value;
    var adj3 = document.getElementById('adj3').value;
    var act1 = document.getElementById('act1').value;
    var act2 = document.getElementById('act2').value;
    var act3 = document.getElementById('act3').value;


    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "The " + adj1 + " Future: Uncertain and Unordinary!";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "Welcome to the " + adj1 + " year of 2117! We've made many " + adj2 + " advancements in " + noun1 + ", and even figured out how to cure " + noun2 + "! Our newest president, " + person1 + " , has decreed that " + act1 + " is legal and it is really benefitting our " + adj3 + " lives. In fact, " + person2 + " is " + act2 + " right now. It's the newest trend of the future. ";
    var paragraph2 = "The latest song to top the future charts is called " + act3 + " " + noun3 + ", and it's the biggest tune since " + person3 + " released the song " + verb1 + " Vibes. Both songs are good. People like to " + verb2 + " while listening to them in their minds, thanks to our new technology. Yep, the future sure is great! Maybe if you " + verb3 + " enough, you'll make it there! For now, just wake up. You've been dreaming all along!";


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
    document.getElementById('title').innerHTML = title;
    document.getElementById('paragraph1').innerHTML = paragraph1;
    document.getElementById('paragraph2').innerHTML = paragraph2;

}

"use strict";

let $ = {
    count: 0,
    commercial: 2,
    attempts: 6,
    disable: false,
    speed: 50,
    continueText: 'Click to continue.',
    instructionText: 'Click on a location to find Paige.',
    notfoundText: "She's not there!",
    monetizeText: "Web Monetization",
    victoryText: 'Times up!  Paige is free.',
    text: [ 
        [
            "Welcome to another installment of JSPN's look back at the highs and lows, the laughter and the tears of this most beloved of Olympic events, Hide and Seek.",
            "Tonight we'll go back to a watershed moment in the history of this sport, the games of the XXVI Olympiad.",
            "Held in 1996, the Atlanta games marked the rise of local girl Paige Knottfound.  Known to her legions of adoring fans as \"The Pride of the 404 Area Code\", Knottfound came out of nowhere to win the gold.",
            "Let's watch..."
        ],
        [
            "Bob: Good evening sports fans!  This is Bob Mactavish and with me as always is Scotty Katznelenbogen.",
            "Scotty: Good evening Bob, America.",
            "Bob: The crowd is overflowing for tonights main event and the name on everybodies' lips is Paige Knottfound.  I've never seen anything like it in 20 years of covering Olympic Hide and Seek.",
            "Scotty: It's quite the phenomenon Bob.  But I've gotta say I'm skeptical if a woman can compete in the highest echelons of this sport.  You see, women vis-a-vis men have an abundance of the hormone estradiol which...OOF...HEY!  WHERE ARE YOU TAKING ME?",
            "Bob: Uh...um, due to technical difficulties, Scotty has had to leave.  Joining me in the studio is a man who is no stranger to Olympic hide and seek glory, Britains' Simon Meldrew.",
            "Simon: Good to be here Bob.",
            "Bob:  Play is about to commence and Knottfound has elected to hide.  Simon, what do you make of this?",
            "Simon:  A fascinating move Bob and quite risky so early in the competition.  Can she pull it off?"
        ],
        [
            "Bob: Simon, I've just received word that Rocco Nascondino has been disqualified. I repeat, Italy's Rocco Nascondino has been disqualified after testing positive for performance-enhancing drugs",
            "Simon:  Truly a tragedy.  After his fall from grace in Seoul back in '88, Nascondino went through some hard times.  But lately he seemed to be pulling his life back together.  This was supposed to be his big comeback.",
            "Bob: A great tragedy.",
            "Simon: I do not exaggerate when I say the entire hide and seek community was pulling for him.  Lucia...",
            "Bob: His wife, actress and singer,  Lucia Firenza",
            "Simon: Yes.  Lucia, our thoughts and prayers are with you and Rocco at this difficult time.",
            "Bob: Yes thoughts and prayers.  Simon, I'd like to address the youth of America.  Pass me my baseball cap, sunglasses and gold chain please?",
            "Simon: Here you go.  Kids you might think ecstacy will hype your hide and seek game and actually you'd be right but...",
            "Bob: Yo, this is MC B Mac and I'm here to say, from popping pills you should stay away",
            "[Simon beatboxes]",
            "Bob: She might give you a hell of a ride but when Lady E seeks you there's no place to hide",
            "[Simon breakdances]",
            "Bob: Hide and seek to the future don't look back stay high on life coz drugs be wack.  Peace out.",
            "Simon: Don't copy that floppy."
        ],
        [
            "Bob: And now a word from our sponsors.",
            "[Scene: Paige working out with weights at a gym.  She looks up.]",
            "Paige: Oh hi there.  I'm Paige Knottfound and you might know me as a world-class athlete.  But I almost quit before my first professional tournament.",
            "[Camera zooms in on her face.]",
            "Paige: You see, my left leg is shorter than my right leg.  For years I hid my shame and then I found Shanley brand shoe lifts.  Now I can hide and seek with confidence.",
            "[Zoom out to concerned mother holding baby]",
            "Mother: But are they safe for the environment?",
            "Paige: Yes!  Shanley shoe lifts are made from a space-age material developed by NASA.  And best of all they are made right here in the USA.",
            "Mother:  Ready or not world, here I come!",
            "Paige: With Shanley shoe lifts!"
        ],
        [
            "Bob: We take you now to our celebrity correspondant Britney Spears for an exclusive interview with Paige Knottfounds parents",
            "Britney: Thanks Bob, I'm here in Kennesaw Georgia, with Barb and Earl Knottfound who, as we all are, are glued to the TV.  Knottfounds you must be so proud.  Tell me, did you always know your daughter was destined for greatness?",
            "Earl:  This is the South.  There's three things we love: guns, Old Glory, and hide and seek.  So Paige got started early.",
            "Barb: When she was two years old, she toddled into the linen closet.  We didn't find her for three days.",
            "Earl: [laughing uproariously] The police department issued an amber alert.",
            "Barb: [joining in the laughter].  Yes.  That's when I knew she was gonna be a winner.",
            "Britney: A winner from the age of two.  And the winning didn't stop there.  Here is some footage of Paige Knottfounds' path to the Olympics",
            "[Training montage is shown to the tune of 'Eye of the Tiger']",
            "Britney: Back to you Bob."
        ],
        [
            "Simon: This is not good Bob.  It says here Paige Knottfound's reflection was seen in a mirror.",
            "Bob: Tell the audience what that means Simon.",
            "Simon: Well, it could lead to a technical foul and that does not bode well for Miss Knottfounds' medal hopes. It's up to the commissioner of Hide and Seek now.  That's Indias' Shodh Gupta.",
            "Bob: What's the consensus in the hide and seek community about this Gupta?",
            "Simon: He's fair but a goes by the book kind of guy.  I'm afraid this could go either way Bob.",
            "Bob: This just in, Commissioner Gupta has made his ruling.  Paige is safe!",
            "Simon: Phew."
        ],
        [
            "Bob: Oh my God! Oh my God!  Paige Knottfound has done it! PAIGE KNOTTFOUND HAS WON THE GOLD!",
            "Crowd: USA! USA! USA!",
            "Simon: Celebrity correspondant Britney Spears is in the locker room for an exclusive interview.",
            "Britney: Paige what a tremendous achievement.  You are the first woman and the first American to win gold in Olympic hide and seek.  Why the tears?",
            "Paige: I'm just so...first I'd like to thank my Lord and Savior Jesus Christ, my parents and coaches but also this goes out to Cindy Alvarez.",
            "Britney: Who is Cindy Alvarez?",
            "Paige: She's a little girl in Sandusky, Ohio.  She can't play hide and seek herself because she has cancer of the Esophagus.  She's my biggest fan and has been writing to me from hospital every day.  I love you Cindy!",
            "Britney: Paige Knottfound.  Truly a class act if I ever saw one.",
            "",
            "After retiring from a long reign as the worlds best hide and seek player, Paige Knottfound went on to a distinguished career in politics and public service culminating in an appointment by President Barron Trump as Admiral of Space Force.  Her ship mysteriously disappeared near Phobos and her remains were never found.",
            "Paiges' favorite charity, the Alvarez Memorial Foundation sponsors Hide and Seek for underprivileged youth at the high school and collegiate level.  Please donate generously."
        ],
    ]
}

$.init = () => {
    for (let i = 1; i < 10; i++) {
        const cell = document.getElementById('c' + i);
        cell.removeEventListener('click', $.onSquare);
        cell.addEventListener('click', $.onSquare, true);
    }
    $.intro1();
};

$.intro1 = async () => {
    $.hideAtl();
    $.showDialog();
    $.disable = true;
    $.clearPrompt();
    await $.banter(dialog, $.text[0]);
    $.continue($.intro2);
}

$.intro2 = async () => {
    $.hideAtl();
    $.showDialog();
    $.disable = true;
    $.clearPrompt();
    await $.banter(dialog, $.text[1]);
    $.count = 1;
    $.continue($.game);
}

$.continue = async (nextState) => {
    $.prompt($.continueText);
    window.addEventListener('click', nextState, {once: true});
}

$.game = async () => {
    $.showAtl();
    $.hideDialog();
    $.message('');
    $.prompt($.instructionText);
    $.disable = false;
}

$.notfound = async () => {
    $.disable = true;
    $.clearPrompt();
    await $.message($.notfoundText);
    const dialog = document.getElementById('dialog');
    $.showDialog();
    dialog.innerHTML = '';
    await $.banter(dialog, $.text[$.count]);
    if ($.count === $.commercial) {
        $.continue($.monetize);
    } else {
        await $.wait(1000);
        $.prompt($.instructionText);
    }
    $.disable = false;
}

$.monetize = async () => {
    $.hideAtl();
    const dialog = document.getElementById('dialog');
    $.showDialog();
    dialog.innerHTML = '';
    $.disable = true;
    $.clearPrompt();
    await $.message($.monetizeText);
    await $.banter(dialog, $.text[3]);
    $.count = 3;
    $.continue($.game);
}

$.victory = async () => {
    $.disable = true;
    $.clearPrompt();
    await $.message($.victoryText);
    $.showDialog();
    await $.banter(dialog, $.text[6]);
}

$.onSquare = () => {
    if ($.disable === true) {
        return;
    }
    const cell = event.target.parentNode;
    $.count++;
    if ($.count === $.attempts) {
        $.victory();
    } else {
        $.notfound();
    }
}

$.clearPrompt = () => {
    const prompt = document.getElementById('prompt');
    prompt.innerHTML = '';
}

$.prompt = (text) => {
    const prompt = document.getElementById('prompt');
    prompt.innerHTML = text;
}

$.message = async (text) => {
    const message = document.getElementById('message');
    message.innerHTML = '';
    await $.typewrite(message, text);
}

$.wait = (delay) => new Promise(resolve => setTimeout(resolve, delay));

$.typewrite = async (element, txt) => {
    let i = 0;
    var speed = $.speed; /* The speed/duration of the effect in milliseconds */

    async function typeWriter() {
        if (i < txt.length) {
            element.innerHTML += txt.charAt(i);
            i++;
            await $.wait(speed);
            await typeWriter();
        }
    }

    await typeWriter();
}

$.banter = async (element, text) => {
    element.innerHTML = '';
    for (var line = 0; line < text.length; line++) {
        element.innerHTML += '<p>';
        await $.typewrite(element, text[line]);
        element.innerHTML += '</p>';
    }
}

$.hideAtl = () => {
    document.getElementById('atl').style.display = 'none';
}

$.showAtl = () => {
    document.getElementById('atl').style.display = 'grid';
}

$.hideDialog = () => {
    document.getElementById('dialog').style.display = 'none';
}

$.showDialog = () => {
    document.getElementById('dialog').style.display = 'block';
}

window.addEventListener('load', $.init, false);

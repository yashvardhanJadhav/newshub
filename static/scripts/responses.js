let intro = ["Hello, I am News Hub Robo", "Hi, I am News Robo", "Hello, My name is News Hub Robo"];
let help = ["How may i assist you?", "How can i help you?", "What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome", "Not an issue", "Its my pleasure", "Mention not"];
let closing = ['Ok bye-bye', 'As you wish, bye take-care', 'Bye-bye, see you soon..']
function getBotResponse(input) {
    //rock paper scissors
    input = input.toUpperCase();
  

    if (input.includes('WHO ARE YOU')) {
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        return finalresult;
    }
    if (input.includes('FINE')) {
        let finalresult = help[Math.floor(Math.random() * help.length)];
        return finalresult;
    }
    if (input.includes('HOW ARE YOU' || 'HOW ARE YOU DOING TODAY')) {
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        return finalresult;
    }
    if (input.includes('TELL ME SOMETHING ABOUT YOU' || 'TELL ME SOMETHING ABOUT YOUR HOBBIES')) {
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        return finalresult;
    }
    if (input.includes('THANK YOU' || 'THANK YOU SO MUCH')) {
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        return finalresult;
    }
    if (input.includes('HELLO')) {
        let finalresult = 'Hello, there!';
        return finalresult;
    }
    if (input.includes('HEY')) {
        let finalresult = 'Hello, there!';
        return finalresult;
    }
    if (input.includes('SPORTS' || 'SPORTS NEWS')) {
        let text = 'Click for Sports News';
        let finalresult = text.link('sports.html');
        return finalresult;
    }
    
    if (input.includes('COVID' || 'COVID-19')) {
        let text = `Click for ` + input;
        let finalresult = text.link('covid-19.html');
        return finalresult;
    }
    if (input.includes('CORONA')) {
        let text = `Click for ` + input;
        let finalresult = text.link('covid-19.html');
        return finalresult;
    }
    if (input.includes('INDIA' || 'INDIA NEWS')) {
        let text = `Click for ` + input;
        let finalresult = text.link('india.html');
        return finalresult;
    }
    if (input.includes('WORLD' || 'INTERNATIONAL ')) {
        let text = `Click for ` + input;
        let finalresult = text.link('world.html');
        return finalresult;
    }
    if (input.includes('BUSINESS' || 'ECONOMICS')) {
        let text = `Click for ` + input;
        let finalresult = text.link('buiness.html');
        return finalresult;
    }
    if (input.includes('CRICKET')) {
        let text = `Click for ` + input;
        let finalresult = text.link('cricket.html');
        return finalresult;
    }
    if (input.includes('CRYPTO' || 'BITCOIN')) {
        let text = `Click for ` + input;
        let finalresult = text.link('crypto.html');
        return finalresult;
    }
    
    if (input.includes('TECHNOLOGY')) {
        let text = `Click for ` + input;
        let finalresult = text.link('technology.html');
        return finalresult;
    }
    if (input.includes('WEATHER')) {
        let text = `Click for ` + input;
        let finalresult = text.link('weather.html');
        return finalresult;
    }
    return 'Try to ask something else!'

    
}
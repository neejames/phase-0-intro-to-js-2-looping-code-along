const name = (["Charlie", "Samip", "Ali"], "birthday");
const event = "surprise"
   function writeCards(name, event) {
    let message = [];
        for (let i = 0; i < name.length; i++) {
            message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
            }
        return message;
    }
    console.log(writeCards(name, event))


    function countDown() {
        let countDown = 0;
        while (countDown < 11) {
            console.log(countDown++)
        }
    }
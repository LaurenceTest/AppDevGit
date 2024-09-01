import { stdin, stdout } from 'process';
import readline from 'readline';
const rl = readline.createInterface({
    input: stdin,
    output: stdout
});
rl.question("What's your name? ", (response) => {
    console.log(`Hello, ${response}!`);
    rl.close();
});
//# sourceMappingURL=index.js.map
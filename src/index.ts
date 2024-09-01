import { stdin, stdout } from 'process'
import readline from 'readline'

const rl: readline.Interface = readline.createInterface({
    input: stdin,
    output: stdout
})
rl.question("What's your name? ",(response)=>{
    console.log(`Hello, ${response}!`)
    rl.close()
})
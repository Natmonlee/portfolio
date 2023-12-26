import { Terminal } from 'xterm';

const term = new Terminal();

document.addEventListener('DOMContentLoaded', function() {
    // Create an xterm.js terminal
   
  
    // Attach it to the terminal container
    term.open(document.getElementById('terminal-container'));
  
    // Your other initialization code goes here

    
  });



  document.addEventListener('keydown', function(event) {
    console.log(event);
    if (event.key === 'Enter') {
      // Get user input from the terminal
      const userInput = term._core.buffer.translateBufferToString();
  
      // Simulate processing (replace this with your actual command execution logic)
      const output = `You entered: ${userInput}\nCommand executed successfully!`;
  
      // Print the output to the terminal
      term.write('\r\n' + output + '\r\n');
    }
  });
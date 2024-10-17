"use client";
import React, { useState } from "react";

const CommandLine = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    setCommand(e.target.value);
  };

  const handleCommandSubmit = (e) => {
    if (e.key === 'Enter') {
      if (command.toLowerCase() === 'hello') {
        setOutput((prevOutput) => [...prevOutput, { command: `hello`, response: 'Hi' }]);
      } else if (command.toLowerCase() === 'clear') {
        setOutput([]); // Clear the output when "clear" command is entered
      } else if (command.toLowerCase() === 'help-cli') {
        setOutput((prevOutput) => [
          ...prevOutput,
          { command: 'help-cli', response: 'Available commands:\n- hello\n- clear\n- info\n- contact\n- help-cli' },
        ]);
      } else if (command.toLowerCase() === 'info') {
        setOutput((prevOutput) => [...prevOutput, { command: 'info', response: 'System Info: This is a Next.js CLI interface.' }]);
      } else if (command.toLowerCase() === 'contact') {
        setOutput((prevOutput) => [...prevOutput, { command: 'contact', response: 'Contact: Email us at support@example.com' }]);
      } else {
        setOutput((prevOutput) => [...prevOutput, { command, response: `Command not found: ${command}` }]);
      }
      setCommand(''); // Reset command input after submission
    }
  };

  return (
    <div className="bg-black text-white h-screen p-4 font-mono w-[50%]">
      <div className="h-full overflow-y-auto">
        {output.map((entry, index) => (
          <div key={index}>
            <div className="text-[#0f0]">$ {entry.command}</div> {/* Past commands in green */}
            <div className="text-[#0d339d]">{entry.response}</div> {/* Command outputs in blue */}
          </div>
        ))}
        <div className="flex">
          <span className="text-[#0f0]">$ </span>
          <input
            className="bg-transparent outline-none flex-grow text-[#0d339d]" // Current typed command in blue
            type="text"
            value={command}
            onChange={handleInputChange}
            onKeyDown={handleCommandSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default CommandLine;
// /* Screen 18 */
// .page {
//       position: absolute; 
//       top: -4281px; 
//       left: 7913px; 
//       width: 393px; 
//       height: 852px; 
//       background: #FFFFFFFF; 
//     }
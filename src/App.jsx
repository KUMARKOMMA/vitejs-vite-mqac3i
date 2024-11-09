import { useState } from 'react';
import MessageBubble from './components/MessageBubble';
import MessageInput from './components/MessageInput';

const initialMessages = [
  { id: 1, text: "Hey! How are you?", timestamp: new Date(Date.now() - 360000), sent: false },
  { id: 2, text: "I'm good, thanks! How about you?", timestamp: new Date(Date.now() - 300000), sent: true },
  { id: 3, text: "Great! Want to grab coffee later?", timestamp: new Date(Date.now() - 240000), sent: false },
];

function App() {
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      timestamp: new Date(),
      sent: true,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="text-lg font-semibold">Messages</h1>
      </header>
      
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isSent={message.sent}
          />
        ))}
      </div>

      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
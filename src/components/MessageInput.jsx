import { useState } from 'react';

export default function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
      <div className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </form>
  );
}
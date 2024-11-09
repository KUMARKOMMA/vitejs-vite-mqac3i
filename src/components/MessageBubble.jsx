import { format } from 'date-fns';

export default function MessageBubble({ message, isSent }) {
  return (
    <div className={`flex ${isSent ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[70%] rounded-lg px-4 py-2 ${
        isSent ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
      }`}>
        <p className="text-sm">{message.text}</p>
        <p className={`text-xs mt-1 ${isSent ? 'text-blue-100' : 'text-gray-500'}`}>
          {format(message.timestamp, 'HH:mm')}
        </p>
      </div>
    </div>
  );
}
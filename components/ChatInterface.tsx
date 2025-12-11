import React, { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Merry Christmas! I am the spirit of this tree. How can I help you?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Add thinking placeholder
    const thinkingMsg: ChatMessage = { role: 'model', text: 'Thinking...', isThinking: true };
    setMessages(prev => [...prev, thinkingMsg]);

    try {
        // Format history for context (simplified)
        const history = messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));
        
        const response = await sendChatMessage(history, userMsg.text);
        
        setMessages(prev => {
            const filtered = prev.filter(m => !m.isThinking);
            return [...filtered, { role: 'model', text: response }];
        });
    } catch (e) {
        setMessages(prev => prev.filter(m => !m.isThinking));
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 md:w-96 bg-black/80 border border-[#eebb55] rounded-xl overflow-hidden flex flex-col shadow-2xl z-40 h-[400px]">
      <div className="bg-[#002e1f] p-3 border-b border-[#eebb55] flex items-center gap-2">
        <span className="material-icons text-[#eebb55]">auto_awesome</span>
        <h3 className="text-[#eebb55] font-bold font-serif">Tree Spirit</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
              msg.role === 'user' 
                ? 'bg-[#006b48] text-white rounded-br-none' 
                : 'bg-[#1a1a1a] text-[#eebb55] border border-[#eebb55]/30 rounded-bl-none'
            }`}>
              {msg.isThinking ? (
                  <span className="animate-pulse italic">Divining answer...</span>
              ) : msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 bg-[#001a10] border-t border-[#eebb55]/30 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask something magical..."
          className="flex-1 bg-transparent border border-[#eebb55]/50 rounded px-3 py-1 text-white focus:outline-none focus:border-[#eebb55]"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="text-[#eebb55] hover:text-white disabled:opacity-50 transition-colors"
        >
          <span className="material-icons">send</span>
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
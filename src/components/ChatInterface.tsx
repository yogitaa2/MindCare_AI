import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import chatbotAvatar from "@/assets/chatbot-avatar.png";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your MindCare AI companion. How are you feeling today? I'm here to listen and support you.",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Thank you for sharing that with me. Your feelings are valid and important.",
        "I understand how you're feeling. Would you like to explore some coping strategies together?",
        "That sounds challenging. Let's work through this step by step.",
        "I'm here to support you. Have you tried any mindfulness exercises recently?",
        "Your mental health journey is unique. What feels most helpful for you right now?",
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="chat" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Chat with Your AI Companion
          </h2>
          <p className="text-xl text-muted-foreground">
            Available 24/7 for support, guidance, and a listening ear
          </p>
        </div>

        <div className="glass-card p-6 rounded-3xl">
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto space-y-4 mb-6 scrollbar-hide">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 animate-slide-up ${
                  message.isUser ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                {!message.isUser && (
                  <div className="flex-shrink-0">
                    <img
                      src={chatbotAvatar}
                      alt="AI Assistant"
                      className="h-8 w-8 rounded-full float-animation"
                    />
                  </div>
                )}
                
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl smooth-transition hover-lift ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-secondary-soft text-secondary-foreground'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-2 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>

                {message.isUser && (
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-accent-foreground">
                        You
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-3 animate-slide-up">
                <img
                  src={chatbotAvatar}
                  alt="AI Assistant"
                  className="h-8 w-8 rounded-full"
                />
                <div className="bg-secondary-soft text-secondary-foreground px-4 py-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex space-x-3">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className="flex-1 rounded-2xl border-border/50 bg-background/50 backdrop-blur-sm"
              disabled={isTyping}
            />
            <Button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isTyping}
              variant="hero"
              size="sm"
              className="rounded-2xl px-6"
            >
              {isTyping ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
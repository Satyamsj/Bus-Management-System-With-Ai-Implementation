import { useState, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
id: number;
text: string;
sender: "user" | "bot";
timestamp: Date;
}

const ChatBot = () => {
const [isOpen, setIsOpen] = useState(false);
const [messages, setMessages] = useState<Message[]>([
{
id: new Date().getTime(),
text: "Hi! I'm your AI assistant. How can I help you optimize your routes today?",
sender: "bot",
timestamp: new Date(),
},
]);
const [inputMessage, setInputMessage] = useState("");

const getBotResponse = (text: string): string => {
const msg = text.toLowerCase();

if (msg.includes("hi") || msg.includes("hello"))
  return "Hello! What can I help you with today?";
if (msg.includes("bus schedule"))
  return "You can check the bus schedule on the Bus Management page.";
if (msg.includes("add bus"))
  return "To add a bus, go to the Bus Management page and click 'Add Bus'.";
if (msg.includes("delete bus"))
  return "To delete a bus, select the bus from the list and click 'Delete'.";
if (msg.includes("update bus"))
  return "To update bus details, click on the bus and select 'Edit'.";
if (msg.includes("route optimization"))
  return "Navigate to the Route Optimizer page to input your source and destination for optimized routes.";

return "Sorry, I didn't understand that. Can you please rephrase?";

};

const handleSendMessage = () => {
if (!inputMessage.trim()) return;

const userMessage: Message = {
  id: new Date().getTime(),
  text: inputMessage,
  sender: "user",
  timestamp: new Date(),
};

setMessages((prev) => [...prev, userMessage]);
setInputMessage("");

setTimeout(() => {
  const botMessage: Message = {
    id: new Date().getTime() + 1,
    text: getBotResponse(inputMessage),
    sender: "bot",
    timestamp: new Date(),
  };
  setMessages((prev) => [...prev, botMessage]);
}, 500);


};

const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
if (e.key === "Enter") handleSendMessage();
};

return (
<>
{!isOpen && (
<Button
className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
onClick={() => setIsOpen(true)}
> <MessageCircle className="h-6 w-6" /> </Button>
)}

  {isOpen && (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-lg z-50 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b bg-gray-100 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
            <Bot className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">AI Assistant</h3>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-700 hover:bg-gray-200"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            className="flex-1 p-2 border rounded"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )}
</>

);
};

export default ChatBot;
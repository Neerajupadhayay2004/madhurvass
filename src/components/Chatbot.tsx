import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "bot";
  text: string;
}

const initialMessages: Message[] = [
  { role: "bot", text: "🙏 Radhe Radhe! Welcome to MadhurVass Homestay. How can I help you today?\n\nYou can ask me about:\n• 🏨 Room availability & pricing\n• 🛕 Nearby temples\n• 📍 Directions & transport\n• 🎭 Cultural experiences\n• 📞 Contact & booking" },
];

const botResponses: Record<string, string> = {
  room: "🏨 We have 4 room types:\n\n• **Standard Sacred Room** — ₹1,200/night\n• **Deluxe Temple View** — ₹2,000/night\n• **Premium Divine Suite** — ₹3,500/night\n• **Family Krishna Suite** — ₹4,500/night\n\nAll rooms include WiFi & breakfast. Book via WhatsApp: wa.me/9193232929",
  price: "💰 Our pricing:\n• Standard: ₹1,200/night\n• Deluxe: ₹2,000/night\n• Premium: ₹3,500/night\n• Family: ₹4,500/night\n\nSpecial discounts for 3+ nights!",
  temple: "🛕 Nearby temples:\n• **Banke Bihari** — 2.5 km\n• **ISKCON Vrindavan** — 4 km\n• **Krishna Janmabhoomi** — 1.5 km\n• **Prem Mandir** — 5 km\n\nWe can arrange guided temple visits!",
  book: "📝 To book your stay:\n1. Visit our Rooms page & fill the booking form\n2. Or WhatsApp us: wa.me/9193232929\n3. Or email: Agshobh@gmail.com\n\nWe'll confirm within 1 hour! 🙏",
  location: "📍 We're located in Mathura, Uttar Pradesh.\n\n🚆 Mathura Junction: 3 km\n✈️ Agra Airport: 55 km\n✈️ Delhi IGI: 160 km\n🚗 Via NH-2 from Delhi: ~3 hrs\n\nWe offer pickup service!",
  holi: "🎨 Holi in Vrindavan is magical! Celebrated over a week with:\n• Lathmar Holi at Barsana\n• Phoolon Ki Holi at Banke Bihari\n• Color celebrations everywhere\n\nBook early — rooms fill up fast during Holi! 🌸",
  food: "🍽️ While we don't have a restaurant, we provide:\n• Complimentary breakfast\n• Local restaurant recommendations\n• Prasad from nearby temples\n\nMathura is famous for its pedas and lassi!",
  checkin: "🕐 Check-in: 12:00 PM\n🕐 Check-out: 11:00 AM\n\nEarly check-in & late checkout available on request (subject to availability).",
  contact: "📞 Contact us:\n• Phone: +91 9323292299\n• WhatsApp: wa.me/9193232929\n• Email: Agshobh@gmail.com\n\nWe respond within 30 minutes! 🙏",
  wifi: "📶 Yes! Free high-speed WiFi is available in all rooms and common areas.",
};

const findResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.match(/room|stay|accommodation/)) return botResponses.room;
  if (lower.match(/price|cost|rate|charge|tariff/)) return botResponses.price;
  if (lower.match(/temple|mandir|darshan/)) return botResponses.temple;
  if (lower.match(/book|reserv/)) return botResponses.book;
  if (lower.match(/location|direction|reach|address|map|where/)) return botResponses.location;
  if (lower.match(/holi|festival|janmashtami/)) return botResponses.holi;
  if (lower.match(/food|eat|restaurant|breakfast/)) return botResponses.food;
  if (lower.match(/check.?in|check.?out|time/)) return botResponses.checkin;
  if (lower.match(/contact|phone|call|whatsapp|email/)) return botResponses.contact;
  if (lower.match(/wifi|internet/)) return botResponses.wifi;
  return "🙏 Thank you for your question! For detailed assistance, please contact us:\n\n📞 +91 9323292299\n💬 WhatsApp: wa.me/9193232929\n📧 Agshobh@gmail.com\n\nOr ask me about rooms, temples, booking, location, or festivals!";
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: findResponse(text) }]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-50 bg-gradient-saffron text-primary-foreground w-14 h-14 rounded-full shadow-golden flex items-center justify-center hover:scale-110 transition-transform animate-bounce"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[500px] max-h-[80vh] bg-card border border-border rounded-2xl shadow-golden flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-saffron text-primary-foreground px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-lg">🪷</span>
              <div>
                <p className="font-heading font-bold text-sm">MadhurVass Assistant</p>
                <p className="text-xs opacity-80">Online • Radhe Radhe 🙏</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 hover:bg-primary-foreground/20 rounded-full transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-gradient-saffron text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground px-4 py-3 rounded-2xl rounded-bl-md text-sm">
                  <span className="inline-flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-3 pb-2 flex gap-1.5 flex-wrap flex-shrink-0">
            {["Rooms", "Temples", "Booking", "Location"].map((q) => (
              <button
                key={q}
                onClick={() => { setInput(q); }}
                className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-3 pb-3 flex gap-2 flex-shrink-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about rooms, temples..."
              className="flex-1 bg-muted text-foreground rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="bg-gradient-saffron text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

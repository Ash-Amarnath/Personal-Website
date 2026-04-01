// ═══════════════════════════════════════════════════════════════════
// ASH'S PSYDUCK — Yellow-themed AI chatbot with Psyduck avatar
// ═══════════════════════════════════════════════════════════════════

import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, User } from "lucide-react";
import { knowledgeBase } from "@/data/knowledge-base";
import psyduckImg from "@/assets/psyduck.png";

const GEMINI_API_KEY = "AIzaSyBNaC1LpyUfwOB2Rv-ulMPMwE1MGgvRfYE";
const GEMINI_MODEL = "gemini-2.0-flash";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// Psyduck theme colors (dimmed yellow for readability)
const PSYDUCK_BG = "#e8b730";       // muted golden yellow
const PSYDUCK_BG_HOVER = "#d4a520"; // darker on hover
const PSYDUCK_TEXT = "#3d2e00";     // very dark brown
const PSYDUCK_LIGHT = "#f5e6a3";    // soft cream
const PSYDUCK_BORDER = "#2d2200";   // very dark outline

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are Ash's Psyduck — a friendly, slightly confused but helpful AI assistant on Ash's portfolio website. You help visitors learn about Amarnath (Ash), his work, projects, SkillCeta, Project People Talk, and research. You speak in a warm, fun tone — occasionally referencing being a duck.

IMPORTANT RULES:
- Only answer questions based on the knowledge base provided below.
- If you don't know something, say "Psy-yi-yi! I don't have that info, but you can reach Ash at ash_amar@outlook.com 🦆"
- Be friendly, concise, and helpful.
- When relevant, suggest visiting specific pages on the website.
- Keep answers concise — 2-4 sentences for simple questions.

KNOWLEDGE BASE:
${knowledgeBase}`;

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
      setShowBubble(false);
    }
  }, [isOpen]);

  // Hide bubble after 8 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(false), 8000);
    return () => clearTimeout(t);
  }, []);

  const callGemini = useCallback(async (userMessage: string, history: Message[]) => {
    const conversationContents = [
      { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
      { role: "model", parts: [{ text: "Psy! 🦆 I'm ready to help! Ask me anything about Ash!" }] },
      ...history.map((m) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      })),
      { role: "user", parts: [{ text: userMessage }] },
    ];

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: conversationContents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 1024, topP: 0.95 },
      }),
    });

    if (!response.ok) throw new Error(`API error ${response.status}`);
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Psy-yi-yi! Something went wrong. Try again! 🦆";
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    try {
      const reply = await callGemini(text.trim(), messages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Psy-yi-yi! I'm having trouble connecting. Reach Ash at ash_amar@outlook.com 🦆" }]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading, callGemini]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    const msg = input.trim();
    setInput("");
    sendMessage(msg);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <>
      {/* Speech bubble — always visible when chat is closed */}
      {!isOpen && (
        <div className="fixed bottom-[88px] right-4 z-50 animate-bounce-in">
          <div className="text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg relative whitespace-nowrap" style={{ backgroundColor: PSYDUCK_BG, color: PSYDUCK_TEXT, border: `2px solid ${PSYDUCK_BORDER}` }}>
            Wanna talk? 🦆
            <div className="absolute -bottom-2.5 right-5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent" style={{ borderTopWidth: 8, borderTopColor: PSYDUCK_BORDER }} />
            <div className="absolute -bottom-[7px] right-5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent" style={{ borderTopWidth: 8, borderTopColor: PSYDUCK_BG }} />
          </div>
        </div>
      )}

      {/* Psyduck toggle — full character, no container */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95"
        style={{ width: 72, height: 72 }}
        aria-label={isOpen ? "Close chat" : "Talk to Ash's Psyduck"}
      >
        {isOpen ? (
          <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: PSYDUCK_BG, border: `3px solid ${PSYDUCK_BORDER}` }}>
            <X size={22} style={{ color: PSYDUCK_TEXT }} />
          </div>
        ) : (
          <img src={psyduckImg} alt="Psyduck" className="w-[72px] h-[72px] object-contain drop-shadow-lg cursor-pointer" />
        )}
      </button>

      {/* Chat panel — yellow theme */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] transition-all duration-500 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-card rounded-2xl shadow-2xl overflow-hidden flex flex-col" style={{ height: "500px", border: `3px solid ${PSYDUCK_BORDER}` }}>
          {/* Header */}
          <div className="px-5 py-4 flex items-center gap-3" style={{ backgroundColor: PSYDUCK_BG, color: PSYDUCK_TEXT }}>
            <img src={psyduckImg} alt="Psyduck" className="w-10 h-10 object-contain" />
            <div>
              <h4 className="text-sm font-bold font-body" style={{ color: PSYDUCK_TEXT }}>Ash's Psyduck</h4>
              <p className="text-[11px]" style={{ color: "#5a4400" }}>Ask me about Ash's work & projects!</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" style={{ backgroundColor: `${PSYDUCK_LIGHT}30` }}>
            {messages.length === 0 && (
              <div className="text-center py-8">
                <img src={psyduckImg} alt="Psyduck" className="w-16 h-16 mx-auto mb-3 opacity-40" />
                <p className="text-sm text-muted-foreground mb-4">
                  Psy! 🦆 I'm Ash's Psyduck. Ask me anything about his work, projects, or how to collaborate!
                </p>
                <div className="space-y-2">
                  {["What is SkillCeta?", "Tell me about Ash's research", "How can I collaborate?"].map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="block w-full text-left px-3 py-2 text-xs rounded-lg transition-colors duration-200"
                      style={{ backgroundColor: PSYDUCK_LIGHT, color: PSYDUCK_TEXT }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = PSYDUCK_BG)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PSYDUCK_LIGHT)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <img src={psyduckImg} alt="Psyduck" className="w-7 h-7 object-contain shrink-0 mt-0.5" />
                )}
                <div
                  className="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                  style={msg.role === "user"
                    ? { backgroundColor: PSYDUCK_BG, color: PSYDUCK_TEXT, borderBottomRightRadius: 6 }
                    : { backgroundColor: PSYDUCK_LIGHT, color: "var(--foreground)", borderBottomLeftRadius: 6 }
                  }
                >
                  {msg.content.split("\n").map((line, li) => (
                    <p key={li} className={li > 0 ? "mt-1.5" : ""}>{line.replace(/\*\*(.*?)\*\*/g, "$1")}</p>
                  ))}
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: PSYDUCK_LIGHT }}>
                    <User size={14} style={{ color: PSYDUCK_TEXT }} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-start">
                <img src={psyduckImg} alt="Psyduck" className="w-7 h-7 object-contain shrink-0" />
                <div className="rounded-2xl rounded-bl-md px-4 py-3" style={{ backgroundColor: PSYDUCK_LIGHT }}>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: `${PSYDUCK_BG}90`, animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: `${PSYDUCK_BG}90`, animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: `${PSYDUCK_BG}90`, animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 bg-card" style={{ borderTop: `1px solid ${PSYDUCK_BG}50` }}>
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Psyduck anything..."
                className="flex-1 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 transition-all duration-200"
                style={{ backgroundColor: PSYDUCK_LIGHT }}
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-xl flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-90"
                style={{ backgroundColor: PSYDUCK_BG, color: PSYDUCK_TEXT }}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

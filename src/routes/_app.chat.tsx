import { useState, useRef, useEffect } from "react";
import { Mic, Paperclip, Send, Plus, MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { chatConversations, chatMessages, suggestedPrompts, user } from "@/lib/mock";
import { cn } from "@/lib/utils";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

type Msg = (typeof chatMessages)[number];

export function ChatPage() {
  useDocumentTitle("AI Health Chat — HealthMate AI");
  const [messages, setMessages] = useState<Msg[]>(chatMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const [activeConv, setActiveConv] = useState(chatConversations[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const now = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    setMessages((m) => [...m, { id: `u-${Date.now()}`, role: "user", text: trimmed, time: now }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          text: "Thanks for sharing. Based on what you've described, I'd suggest rest and hydration, and monitoring your symptoms over the next 24 hours. Would you like me to log this in your symptom history?",
          time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
        },
      ]);
    }, 1200);
  };

  return (
    <div className="-mx-4 -my-6 flex h-[calc(100vh-4rem)] md:-mx-8 md:-my-8">
      {/* History */}
      <aside className="hidden w-72 shrink-0 border-r bg-card md:flex md:flex-col">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-sm font-semibold">Conversations</h2>
          <Button size="sm" variant="ghost"><Plus className="h-4 w-4" /></Button>
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          {chatConversations.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveConv(c.id)}
              className={cn(
                "flex w-full items-start gap-2 rounded-lg p-3 text-left text-sm transition-colors",
                activeConv === c.id ? "bg-accent text-accent-foreground" : "hover:bg-muted",
              )}
            >
              <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{c.title}</p>
                <p className="text-xs text-muted-foreground">{c.updated}</p>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Chat */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="border-b px-6 py-4">
          <h1 className="text-base font-semibold">HealthMate AI</h1>
          <p className="text-xs text-muted-foreground">Always-on health assistant · Not medical advice</p>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            {messages.map((m) => (
              <MessageBubble key={m.id} msg={m} />
            ))}
            {typing && (
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8"><AvatarFallback className="bg-primary text-primary-foreground text-xs">AI</AvatarFallback></Avatar>
                <div className="rounded-2xl bg-muted px-4 py-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t bg-card px-4 py-4 md:px-8">
          <div className="mx-auto max-w-3xl space-y-3">
            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="rounded-full border bg-muted/60 px-3 py-1 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  {p}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-end gap-2 rounded-2xl border bg-background p-2 shadow-soft"
            >
              <Button type="button" variant="ghost" size="icon" className="shrink-0">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                placeholder="Describe how you're feeling…"
                className="min-h-[40px] flex-1 resize-none border-0 bg-transparent shadow-none focus-visible:ring-0"
                rows={1}
              />
              <Button
                type="button"
                variant={listening ? "default" : "ghost"}
                size="icon"
                className="shrink-0"
                onClick={() => setListening((l) => !l)}
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button type="submit" size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
            {listening && (
              <p className="text-center text-xs text-primary">Listening… (demo)</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ msg }: { msg: Msg }) {
  const isUser = msg.role === "user";
  return (
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarFallback className={isUser ? "bg-accent text-accent-foreground text-xs" : "bg-primary text-primary-foreground text-xs"}>
          {isUser ? user.initials : "AI"}
        </AvatarFallback>
      </Avatar>
      <div className={cn("max-w-[80%] min-w-0", isUser && "items-end")}>
        <div
          className={cn(
            "rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap",
            isUser ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
          )}
        >
          {msg.text}
        </div>
        <div className={cn("mt-1 text-[10px] text-muted-foreground", isUser && "text-right")}>{msg.time}</div>
      </div>
    </div>
  );
}
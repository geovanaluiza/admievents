<script setup lang="ts">
const props = defineProps<{ eventName?: string }>()

interface ChatMessage {
  role: 'user' | 'bot'
  text: string
  time: string
}

const KNOWLEDGE = [
  { q: 'parking', a: 'Parking is completely free for all admissions events. Pull into any visitor spot — no permit needed on event days.' },
  { q: 'cancel', a: 'No problem! Just email admissions@northwestu.edu at least 48 hours before your event and we\'ll move you to another date with no penalty. Last-minute stuff happens.' },
  { q: 'cost | free | price', a: 'All our admissions events are completely free — including the NU Overnight. There\'s zero cost to attend.' },
  { q: 'what to wear | dress | casual', a: 'PNW casual all the way. Jeans, sneakers, layers — totally fine. Nothing formal needed.' },
  { q: 'parents | mom | dad | guardian', a: 'Parents are absolutely welcome at all events! Discover NU is designed for the whole family. For NU Overnight, your student stays with a vetted student host — you\'re free to head home or explore Kirkland.' },
  { q: 'register | sign up', a: 'Head to the orange "Register now" button on the event page — it takes about 2 minutes. No application required at this stage.' },
  { q: 'swoop shop', a: 'The Swoop Shop is our campus bookstore. You can order event-specific merch and gear there — hats, shirts, and more with NU branding.' },
  { q: 'food | lunch | eat', a: 'Meals are included at all events. Discover NU includes lunch at Sæter, our campus dining hall. NU Overnight includes dinner and breakfast.' },
  { q: 'safety | safe', a: 'Our campus is private with 24/7 security. For NU Overnight, every student host is background-checked and trained. Residence halls have key-card access only.' },
  { q: 'scholarship | aid | financial', a: 'Over 90% of NU students receive financial aid. Our financial aid team is at every Discover NU event — and you can always email admissions@northwestu.edu to set up a one-on-one conversation.' },
  { q: 'drive | directions | transit', a: 'We\'re 20 minutes from Seattle, easy off I-405. From Seattle: take I-90 East to Exit 12, then follow signs. No car? King County Metro runs nearby. We can help coordinate rideshare.' },
  { q: 'accommodation | hotel | stay', a: 'Kirkland has several hotels nearby. The closest is the Hyatt Regency Kirkland — mention Northwest University and ask for the NU rate.' },
  { q: 'nursing | business | program', a: 'Each program has faculty at Discover NU events. The Academic Fair is your chance to meet professors from Nursing, Business, Music Production, Psychology, and more.' },
]

const pickAnswer = (input: string) => {
  const lower = input.toLowerCase()
  for (const item of KNOWLEDGE) {
    if (item.q.split('|').some(k => lower.includes(k.trim()))) {
      return item.a
    }
  }
  return null
}

const ESCALATE_MSG =
  "I'm not sure I have the right answer for that. Want to chat with a real human from our admissions team? They'll reply within one business day."

const messages = ref<ChatMessage[]>([
  {
    role: 'bot',
    text: props.eventName
      ? `Hi! I'm your NU Admissions helper. Ask me anything about ${props.eventName} or admissions in general.`
      : "Hi! I'm your NU Admissions helper. Ask me anything about our events, admissions, or what it's like to be an Eagle 🦅",
    time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
  },
])

const inputText = ref('')
const isOpen = ref(false)
const isLoading = ref(false)
const showEscalate = ref(false)
const escalated = ref(false)
const inputRef = ref<HTMLTextAreaElement | null>(null)

const send = async () => {
  const text = inputText.value.trim()
  if (!text || isLoading.value) return
  inputText.value = ''
  showEscalate.value = false

  messages.value.push({
    role: 'user',
    text,
    time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
  })

  isLoading.value = true
  await new Promise(r => setTimeout(r, 600 + Math.random() * 400))

  const answer = pickAnswer(text)
  messages.value.push({
    role: 'bot',
    text: answer ?? ESCALATE_MSG,
    time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
  })
  isLoading.value = false

  if (!answer) showEscalate.value = true

  nextTick(() => {
    if (chatEl) chatEl.scrollTop = chatEl.scrollHeight
  })
}

const escalate = () => {
  showEscalate.value = false
  escalated.value = true
  messages.value.push({
    role: 'bot',
    text: "Great idea — our admissions team is here to help. Email admissions@northwestu.edu and we'll reply within one business day, or browse admissions.northwestu.edu for the full info. You can also call (425) 555-1234.",
    time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
  })
}

const chatEl = ref<HTMLElement | null>(null)
watch(messages, () => {
  nextTick(() => { if (chatEl) chatEl.scrollTop = chatEl.scrollHeight })
})

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    send()
  }
}
</script>

<template>
  <div class="chatbot" :class="{ 'is-open': isOpen }">
    <!-- Toggle button -->
    <button class="chat-toggle" aria-label="Open admissions help" @click="isOpen = !isOpen">
      <Transition name="icon-swap" mode="out-in">
        <svg v-if="!isOpen" key="open" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else key="close" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </Transition>
      <span class="chat-label">Help?</span>
    </button>

    <!-- Chat panel -->
    <Transition name="chat-slide">
      <div v-if="isOpen" class="chat-panel" role="dialog" aria-label="Admissions help chatbot">
        <div class="chat-header">
          <div class="chat-header-info">
            <span class="chat-avatar" aria-hidden="true">🦅</span>
            <div>
              <p class="chat-header-name">NU Admissions Helper</p>
              <p class="chat-header-sub">Usually replies in minutes</p>
            </div>
          </div>
          <a href="mailto:admissions@northwestu.edu" class="chat-email" title="Email us">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </a>
        </div>

        <div class="chat-messages" ref="chatEl" aria-live="polite">
          <div
            v-for="(msg, i) in messages"
            :key="i"
            class="chat-msg"
            :class="`msg-${msg.role}`"
          >
            <span v-if="msg.role === 'bot'" class="msg-avatar" aria-hidden="true">🦅</span>
            <div class="msg-bubble">
              <p>{{ msg.text }}</p>
              <span class="msg-time">{{ msg.time }}</span>
            </div>
          </div>

          <div v-if="isLoading" class="chat-msg msg-bot">
            <span class="msg-avatar" aria-hidden="true">🦅</span>
            <div class="msg-bubble typing">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>

        <div v-if="showEscalate" class="escalate-row">
          <button class="btn btn-coral btn-sm btn-full" @click="escalate">
            ✉️ Email admissions team
          </button>
        </div>

        <div v-if="escalated" class="escalate-row">
          <p class="escalate-note">
            Or call us: <a href="tel:+14255551234">(425) 555-1234</a> · <a href="mailto:admissions@northwestu.edu">admissions@northwestu.edu</a>
          </p>
        </div>

        <form class="chat-input-row" @submit.prevent="send">
          <textarea
            v-model="inputText"
            ref="inputRef"
            class="chat-input"
            placeholder="Ask anything..."
            rows="1"
            maxlength="300"
            @keydown="handleKeydown"
            aria-label="Your message"
          ></textarea>
          <button type="submit" class="chat-send" :disabled="!inputText.trim()" aria-label="Send message">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* ── Toggle ────────────────────────────────────────────── */
.chatbot {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: var(--z-toast);
}
.chat-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 20px;
  border-radius: var(--radius-pill);
  background: var(--accent-coral);
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-glow-coral);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-sm);
  transition: transform var(--dur-fast) var(--ease-spring), box-shadow var(--dur-fast) ease;
}
.chat-toggle:hover { transform: translateY(-3px) scale(1.03); }
.chat-label { display: block; }

/* ── Panel ──────────────────────────────────────────────── */
.chat-panel {
  position: absolute;
  bottom: 64px;
  right: 0;
  width: 360px;
  max-width: calc(100vw - 48px);
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl), 0 0 0 1px var(--border-subtle);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 520px;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: var(--bg-dark);
  color: var(--text-on-dark);
}
.chat-header-info { display: flex; align-items: center; gap: 10px; }
.chat-avatar { font-size: 1.4rem; }
.chat-header-name { font-family: var(--font-display); font-weight: 700; font-size: var(--text-sm); }
.chat-header-sub { font-size: var(--text-xs); color: rgba(240,244,248,.55); }
.chat-email {
  width: 32px; height: 32px;
  border-radius: var(--radius-circle);
  background: rgba(255,255,255,.1);
  display: grid; place-items: center;
  color: rgba(240,244,248,.7);
  transition: background var(--dur-fast) ease, color var(--dur-fast) ease;
}
.chat-email:hover { background: rgba(255,255,255,.2); color: #fff; }

/* ── Messages ───────────────────────────────────────────── */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scrollbar-width: thin;
  scrollbar-color: var(--border-mid) transparent;
}
.chat-msg { display: flex; align-items: flex-end; gap: 8px; }
.msg-user { flex-direction: row-reverse; }
.msg-avatar { font-size: 1.1rem; flex: none; margin-bottom: 2px; }
.msg-bubble {
  max-width: 80%;
  padding: 10px 14px;
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}
.msg-bot .msg-bubble {
  background: var(--bg-tint);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  border-bottom-left-radius: 4px;
}
.msg-user .msg-bubble {
  background: var(--accent-coral);
  color: #fff;
  border-bottom-right-radius: 4px;
}
.msg-time { display: block; font-size: 10px; opacity: .55; margin-top: 2px; }

/* Typing indicator */
.msg-bubble.typing {
  display: flex; align-items: center; gap: 4px; padding: 14px 18px;
}
.msg-bubble.typing span {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--text-muted);
  animation: typing-bounce 1.2s infinite;
}
.msg-bubble.typing span:nth-child(2) { animation-delay: .2s; }
.msg-bubble.typing span:nth-child(3) { animation-delay: .4s; }
@keyframes typing-bounce {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-6px); }
}

/* ── Escalate ───────────────────────────────────────────── */
.escalate-row { padding: 0 16px 12px; }
.escalate-note { text-align: center; font-size: var(--text-xs); color: var(--text-muted); }
.escalate-note a { color: var(--accent-teal); font-weight: 600; }

/* ── Input ──────────────────────────────────────────────── */
.chat-input-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 12px 16px 16px;
  border-top: 1px solid var(--border-subtle);
}
.chat-input {
  flex: 1;
  resize: none;
  border: 1.5px solid var(--border-mid);
  border-radius: var(--radius-lg);
  padding: 10px 14px;
  font-size: var(--text-sm);
  color: var(--text-primary);
  background: var(--bg-base);
  outline: none;
  max-height: 100px;
  transition: border-color var(--dur-fast) ease;
  line-height: var(--leading-relaxed);
}
.chat-input:focus { border-color: var(--accent-teal); }
.chat-send {
  width: 40px; height: 40px;
  border-radius: var(--radius-circle);
  background: var(--accent-coral);
  color: #fff;
  border: none;
  display: grid; place-items: center;
  cursor: pointer;
  flex: none;
  transition: background var(--dur-fast) ease, transform var(--dur-fast) ease;
}
.chat-send:hover:not(:disabled) { background: var(--accent-coral-dark); transform: scale(1.08); }
.chat-send:disabled { opacity: .4; cursor: not-allowed; }

/* ── Transitions ─────────────────────────────────────────── */
.chat-slide-enter-active, .chat-slide-leave-active {
  transition: opacity var(--dur-base) ease, transform var(--dur-base) var(--ease-out);
}
.chat-slide-enter-from, .chat-slide-leave-to {
  opacity: 0; transform: translateY(12px) scale(.97);
}
.icon-swap-enter-active, .icon-swap-leave-active { transition: opacity .1s ease; }
.icon-swap-enter-from, .icon-swap-leave-to { opacity: 0; }

@media (max-width: 480px) {
  .chatbot { bottom: 16px; right: 16px; }
  .chat-panel { width: calc(100vw - 32px); }
}
</style>

/* =============================================================
   useEvents — CMS-like event data store
   Edit this file to add / update events — no code changes needed.
   ============================================================= */

export interface EventInstance {
  date: string        // ISO date string: "2026-09-18"
  label: string       // Human-readable: "Thursday, September 18, 2026"
  timeStart: string   // "8:30 AM"
  timeEnd: string    // "2:00 PM"
}

export interface ScheduleItem {
  time: string
  title: string
  description?: string
  icon?: string       // emoji or icon name
  location?: string
}

export interface FaqItem {
  q: string
  a: string
  category: 'general' | 'logistics' | 'parents' | 'cost'
}

export interface EventData {
  id: string
  slug: string
  type: 'discover' | 'overnight' | 'scholarship' | 'custom'
  name: string
  tagline: string
  emoji: string
  color: 'coral' | 'teal' | 'gold'
  description: string
  shortDescription: string
  heroImage: string

  // Video placeholder
  videoPlaceholder: {
    thumbnail: string
    label: string
    embedUrl?: string   // replace with actual YouTube/Vimeo URL when available
  }

  // Registration
  registrationUrl: string
  swoopShopUrl: string

  // Multiple instances (for recurring events)
  instances: EventInstance[]

  // Agenda
  schedule: ScheduleItem[]

  // FAQ
  faqs: FaqItem[]

  // What to bring
  bringItems: { icon: string; text: string }[]

  // Dress code
  dressCode: string
  dressCodeTip: string

  // Parents section
  parentsTitle: string
  parentsIntro: string
  parentsItems: { icon: string; title: string; body: string }[]

  // Financial aid snippet
  financialAid?: {
    headline: string
    body: string
    ctaLabel: string
    ctaUrl: string
  }
}

export const useEvents = () => {
  const EVENTS: EventData[] = [
    {
      id: 'discover-nu-2026',
      slug: 'discover-nu',
      type: 'discover',
      name: 'Discover NU',
      tagline: 'Your first look at what could be home.',
      emoji: '🏔️',
      color: 'coral',
      shortDescription: 'A guided tour + admissions chat — perfect for first-timers figuring out if NU clicks.',
      description: 'Discover NU is our signature open house event. Spend the day on campus, meet professors and current students, and get all your questions answered by our admissions team. Bring the whole crew — parents, guardians, and anyone who wants to know what makes this place special.',
      heroImage: '/events/discover-hero.jpg',

      videoPlaceholder: {
        thumbnail: '/events/discover-video-thumb.jpg',
        label: 'What to expect at Discover NU',
        embedUrl: '',
      },

      registrationUrl: 'https://www.northwestu.edu/visit/discover-nu',
      swoopShopUrl: 'https://shop.northwestu.edu',

      instances: [
        {
          date: '2026-09-18',
          label: 'Thursday, September 18, 2026',
          timeStart: '8:30 AM',
          timeEnd: '2:00 PM',
        },
        {
          date: '2026-10-10',
          label: 'Saturday, October 10, 2026',
          timeStart: '9:00 AM',
          timeEnd: '1:00 PM',
        },
      ],

      schedule: [
        { time: '8:30 AM',  title: 'Check-in & Welcome Coffee', description: 'Grab your nametag and a caffeine boost. Meet other families exploring NU.', icon: '☕', location: 'Larson Hall Lobby' },
        { time: '9:00 AM',  title: 'Campus Tour', description: 'Student-led walk through 56 acres — trails, chapel, labs, dining, the whole vibe.', icon: '🚶', location: 'Departs from Larson Hall' },
        { time: '10:30 AM', title: 'Academic Fair', description: 'Meet faculty from Nursing, Business, Music Production, Psychology, and more.', icon: '📚', location: 'University Center' },
        { time: '11:30 AM', title: 'Student Life Panel', description: 'Real students share the real story — faith, friends, food, and everything in between.', icon: '💬', location: ' Chapel' },
        { time: '12:15 PM', title: 'Lunch on Us', description: 'Feast at Sæter, our campus dining hall. Come hungry.', icon: '🍽️', location: 'Sæter Dining Hall' },
        { time: '1:00 PM',  title: 'Admissions Q&A', description: 'Got questions? Our admissions counselors have answers. Bring a list.', icon: '🎓', location: 'Larson Hall' },
        { time: '1:45 PM',  title: 'Optional: Department Visits', description: 'Dig deeper into your program of interest.', icon: '🧪', location: 'Various' },
      ],

      faqs: [
        { q: 'Is parking free?', a: 'Yes — parking is free for all Discover NU guests. Pull into any visitor spot and grab a pass at check-in.', category: 'logistics' },
        { q: 'Can I bring siblings or younger kids?', a: 'Totally. While some sessions are aimed at high schoolers, we love having families explore together. Kids are welcome at lunch and the campus tour.', category: 'logistics' },
        { q: 'What should I wear?', a: 'Come as you are. This is PNW casual — jeans and sneakers are totally fine. The tour is partly outdoors so dress for the weather.', category: 'logistics' },
        { q: 'How do I know if I need to register each family member?', a: 'Each guest attending lunch or visiting departments needs their own registration, even if they\'re coming with a student.', category: 'logistics' },
        { q: 'What is the cancellation policy?', a: 'Life happens — just email visit@northwestu.edu at least 48 hours before your event and we\'ll move you to another date with no penalty.', category: 'logistics' },
        { q: 'Will there be someone to talk to about financial aid?', a: 'Yes — our financial aid team is at every Discover NU event. You can also ask us anything in the Q&A or swing by the Financial Aid table during the Academic Fair.', category: 'cost' },
        { q: 'Is my student expected to apply on the day of the event?', a: 'Not at all. Discover NU is a no-pressure event. We want you to explore, ask questions, and figure out if NU feels right — no commitment required.', category: 'parents' },
        { q: 'What if my student is applying to multiple schools?', a: 'That\'s completely normal. We\'ll give you the full picture of what makes NU unique, but we\'ll never pressure you. Our job is to help you decide, not to decide for you.', category: 'parents' },
        { q: 'Can I get a feel for the spiritual environment on campus?', a: 'Absolutely. We\'ll talk openly about faith at NU, including chapel, worship nights, and how spirituality shows up in and out of the classroom. Students will share their own experiences too.', category: 'parents' },
        { q: 'How competitive is admissions?', a: 'We take a holistic approach — your student\'s character, story, and fit matter as much as grades. Our counselors can talk through your student\'s profile individually.', category: 'general' },
      ],

      bringItems: [
        { icon: '👟', text: 'Comfy shoes for the campus tour (partly outdoor, about 45 minutes)' },
        { icon: '🌧️', text: 'Layers and a light jacket — Kirkland weather is unpredictable' },
        { icon: '📝', text: 'Questions! Bring a list or just wing it' },
        { icon: '📱', text: 'Your phone for photos and the campus app' },
        { icon: '💊', text: 'Any personal meds / allergy epi-pens (we don\'t have these on hand)' },
      ],

      dressCode: 'PNW Casual',
      dressCodeTip: 'Jeans, sneakers, layers — totally fine. Nothing formal needed.',

      parentsTitle: 'A note for parents & guardians',
      parentsIntro: 'We know you\'re asking different questions than your student. Here\'s what matters to you — and how we\'ve got you covered.',
      parentsItems: [
        { icon: '🔒', title: 'Safety & wellbeing', body: 'Our campus is private, gated, and has 24/7 security. Students and families consistently tell us NU feels safe and like a real community, not just a campus.' },
        { icon: '💰', title: 'Financial clarity', body: 'We\'ll walk through real scholarship scenarios, out-of-pocket costs, and what financial aid actually looks like for families in different income brackets. No surprises.' },
        { icon: '👩‍🏫', title: 'Faculty accessibility', body: 'Class sizes average 18 students. Your student\'s professor will know their name by week two. We\'ll show you exactly how that works in our labs and seminar rooms.' },
        { icon: '🚗', title: 'Getting here', body: 'We\'re 20 minutes from Seattle, with easy parking on campus. If your student flies in, SEA-TAC is about 35 minutes away. We can help coordinate rideshare splits.' },
      ],

      financialAid: {
        headline: 'Scholarships are part of the conversation.',
        body: 'Over 90% of our students receive financial aid. We\'ll break down grants, scholarships, and work-study so you know what to expect before you apply.',
        ctaLabel: 'Explore scholarships →',
        ctaUrl: 'https://www.northwestu.edu/financial-aid',
      },
    },

    {
      id: 'nu-overnight-2026',
      slug: 'nu-overnight',
      type: 'overnight',
      name: 'NU Overnight',
      tagline: 'Sleep in a dorm. Eat in the dining hall. Be an NU Eagle for 24 hours.',
      emoji: '🌙',
      color: 'teal',
      shortDescription: 'Live the overnight experience — stay in a residence hall, attend classes, and see what a day in the life actually looks like.',
      description: 'The NU Overnight is the best way to know if this is the right fit. You\'ll stay in a residence hall with a current student host, eat at Sæter, attend real classes, and get the unfiltered truth about the NU experience. Parents: your student is in good hands — our overnight hosts are trained, vetted, and excited to show off their home.',
      heroImage: '/events/overnight-hero.jpg',

      videoPlaceholder: {
        thumbnail: '/events/overnight-video-thumb.jpg',
        label: 'What an NU Overnight actually looks like',
        embedUrl: '',
      },

      registrationUrl: 'https://www.northwestu.edu/visit/nu-overnight',
      swoopShopUrl: 'https://shop.northwestu.edu',

      instances: [
        { date: '2026-09-24', label: 'Thursday, September 24, 2026', timeStart: '6:00 PM', timeEnd: 'Next day 4:00 PM' },
        { date: '2026-10-15', label: 'Thursday, October 15, 2026',   timeStart: '6:00 PM', timeEnd: 'Next day 4:00 PM' },
        { date: '2026-11-05', label: 'Thursday, November 5, 2026',  timeStart: '6:00 PM', timeEnd: 'Next day 4:00 PM' },
        { date: '2026-11-19', label: 'Thursday, November 19, 2026', timeStart: '6:00 PM', timeEnd: 'Next day 4:00 PM' },
        { date: '2026-01-21', label: 'Thursday, January 21, 2027',  timeStart: '6:00 PM', timeEnd: 'Next day 4:00 PM' },
        { date: '2026-02-11', label: 'Thursday, February 11, 2027', timeStart: '6:00 PM', timeEnd: 'Next day 4:00 PM' },
      ],

      schedule: [
        { time: '6:00 PM',  title: 'Arrival & Check-in', description: 'Meet your student host and get settled in the residence hall.', icon: '🏠', location: 'Cascade Hall Lobby' },
        { time: '6:30 PM',  title: 'Dinner at Sæter', description: 'Dine with your host and their friends. First test: the taco bar.', icon: '🌮', location: 'Sæter Dining Hall' },
        { time: '7:30 PM',  title: 'Evening Activity', description: 'Hosted game night, worship, or campus event — depends on the night.', icon: '🎮', location: 'University Center' },
        { time: '10:00 PM', title: 'Wind Down', description: 'Head to your host\'s room. Quiet hours start at 11 PM.', icon: '😴', location: 'Residence Hall' },
        { time: '8:00 AM',  title: 'Breakfast', description: 'Fuel up before the morning sessions.', icon: '🥞', location: 'Sæter Dining Hall' },
        { time: '9:00 AM',  title: 'Morning Classes', description: 'Sit in on two real NU classes — you pick which ones.', icon: '📖', location: 'Academic Buildings' },
        { time: '11:00 AM', title: 'Campus Life Chat', description: 'Open Q&A with student life staff and current students.', icon: '💬', location: 'Student Center' },
        { time: '12:00 PM', title: 'Lunch & Goodbyes', description: 'One last meal, then wrap up. We\'ll help arrange rides or transit.', icon: '👋', location: 'Sæter Dining Hall' },
      ],

      faqs: [
        { q: 'Who will my student be staying with?', a: 'We match each guest with a current NU student host who\'s been trained and vetted. Hosts are selected for their friendliness and ability to give an honest picture of life here.', category: 'logistics' },
        { q: 'What should they bring for an overnight?', a: 'Sleeping essentials (or a sleeping bag if you prefer), a change of clothes, toiletries, and any schoolwork they might want to work on between sessions. We provide pillows and towels.', category: 'logistics' },
        { q: 'Is it safe overnight?', a: 'Yes. Residence halls have secure key-card access, and our Campus Security patrols 24/7. Your student host will go over safety protocols during check-in.', category: 'logistics' },
        { q: 'My student has a food allergy — will they be okay?', a: 'Let us know at registration and we\'ll connect you with our dining services team. Sæter has allergen-friendly stations clearly labeled. We take this seriously.', category: 'logistics' },
        { q: 'Can I speak to someone if my student has anxiety about staying overnight?', a: 'Of course — email visit@northwestu.edu before registering and we\'ll work something out. Some students start with a day visit and do an overnight later, and that\'s fine too.', category: 'parents' },
        { q: 'What if my student doesn\'t connect with their host?', a: 'It\'s rare, but if it happens, our student life team is on call overnight. They can move your student to a different room or pair them with a different host for the next morning\'s activities.', category: 'parents' },
        { q: 'Do parents need to stay nearby?', a: 'Not at all. Our hosts are trained to take great care of overnight guests. That said, some families prefer to stay in the area — we can share hotel recommendations in Kirkland.', category: 'parents' },
        { q: 'What happens if my student gets homesick?', a: 'We handle it with care. Your student\'s host will check in, and our student life team is available. If needed, we can arrange early checkout with no questions asked.', category: 'parents' },
        { q: 'Is the overnight free?', a: 'Yes — the NU Overnight is completely free, including meals and a bed for the night. Register early as spots fill up quickly.', category: 'cost' },
        { q: 'What\'s the cancellation policy for overnights?', a: 'Email visit@northwestu.edu at least 5 days before the event and we\'ll move your registration to another date at no charge. Last-minute cancellations are okay too — just let us know.', category: 'logistics' },
      ],

      bringItems: [
        { icon: '🛏️', text: 'Sleeping bag or blankets (we provide pillows and towels)' },
        { icon: '👕', text: 'Change of clothes + PJ pants for the next morning' },
        { icon: '🧴', text: 'Toiletries + anything you need to feel comfortable overnight' },
        { icon: '📱', text: 'Phone (charger too — outlets exist)' },
        { icon: '💊', text: 'Personal meds or allergy EpiPen if needed' },
        { icon: '🎒', text: 'Small backpack for carrying stuff between buildings' },
      ],

      dressCode: 'Casual',
      dressCodeTip: 'Athleisure, jeans, whatever you\'d wear on a casual college day. Classes tomorrow are real classes — your student\'s host will be dressed normally.',

      parentsTitle: 'A note for parents & guardians',
      parentsIntro: 'Sending your student to sleep over at a college can feel like a big step. Here\'s exactly what to expect and how we keep them safe and comfortable.',
      parentsItems: [
        { icon: '🛡️', title: 'Vetted student hosts', body: 'Every NU Overnight host completes a background check and a multi-day training on safety, inclusion, and student wellbeing. They genuinely want to be hosts — it\'s not an assignment.' },
        { icon: '🏥', title: 'Health & dietary support', body: 'We accommodate food allergies, medical needs, and dietary restrictions. Register early and include any notes so our team can prepare in advance.' },
        { icon: '📱', title: 'Always reachable', body: 'Your student can use their phone to call or text you anytime. Their host will share the student life on-call number before bed in case of any issues.' },
        { icon: '🚪', title: 'Easy early exit', body: 'If anything doesn\'t feel right — for any reason — early checkout is available with no questions asked. Your student\'s comfort and safety come first.' },
      ],

      financialAid: {
        headline: 'Thinking about cost? You\'re not alone.',
        body: 'Most families have the same conversation. We\'ll make sure you have a real number — not a ballpark — before your student applies.',
        ctaLabel: 'Talk to financial aid →',
        ctaUrl: 'https://www.northwestu.edu/financial-aid',
      },
    },
  ]

  const getEvent = (slug: string) => EVENTS.find(e => e.slug === slug) ?? null
  const allEvents = EVENTS

  return { allEvents, getEvent }
}

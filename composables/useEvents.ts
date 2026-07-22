/* =============================================================
   Discover NU — Event Data
   CMS-like store. Edit schedule, FAQs, and details here.
   ============================================================= */

export interface EventInstance {
  date: string
  label: string
  timeStart: string
  timeEnd: string
}

export interface ScheduleItem {
  time: string
  title: string
  description?: string
  icon?: string
  location?: string
  track?: 'all' | 'students' | 'parents'
}

export interface FaqItem {
  q: string
  a: string
  category: 'general' | 'logistics' | 'parents' | 'cost'
}

export interface EventData {
  id: string
  slug: string
  name: string
  tagline: string
  icon: string
  color: 'navy' | 'gold' | 'teal'
  description: string
  shortDescription: string
  heroImage: string
  videoPlaceholder: {
    thumbnail: string
    label: string
    embedUrl?: string
  }
  registrationUrl: string
  swoopShopUrl: string
  instances: EventInstance[]
  schedule: ScheduleItem[]
  faqs: FaqItem[]
  bringItems: { icon: string; text: string }[]
  dressCode: string
  dressCodeTip: string
  parentsTitle: string
  parentsIntro: string
  parentsItems: { icon: string; title: string; body: string }[]
  financialAid?: {
    headline: string
    body: string
    ctaLabel: string
    ctaUrl: string
  }
}

const EVENTS: EventData[] = [
  {
    id: 'discover-nu-2026',
    slug: 'discover-nu',
    name: 'Discover NU',
    tagline: 'Your first look at what could be home.',
    icon: 'mountain',
    color: 'navy',
    shortDescription: 'A guided tour + admissions chat — perfect for first-timers figuring out if NU clicks.',
    description: 'Discover NU is our signature open house event. Spend the day on campus, meet professors and current students, and get all your questions answered by our admissions team. Bring the whole crew — parents, guardians, and anyone who wants to know what makes this place special.',
    heroImage: '/events/discover-hero.jpg',
    videoPlaceholder: {
      thumbnail: '/events/discover-video-thumb.jpg',
      label: 'What to expect at Discover NU',
    },
    registrationUrl: 'https://www.northwestu.edu/visit/discover-nu',
    swoopShopUrl: 'https://shop.northwestu.edu',

    instances: [
      { date: '2026-09-18', label: 'Thursday, September 18, 2026', timeStart: '8:15 AM', timeEnd: '4:00 PM' },
      { date: '2026-10-10', label: 'Saturday, October 10, 2026', timeStart: '8:15 AM', timeEnd: '4:00 PM' },
    ],

    schedule: [
      { time: '8:15 AM',  title: 'Check In', description: 'Grab your nametag, say hi to the team, and get settled.', icon: 'tag', location: 'Larson Hall Lobby' },
      { time: '8:30 AM',  title: 'Welcome', description: 'Get oriented — who we are, what the day looks like, and how to make the most of it.', icon: 'hand', location: 'Larson Hall' },
      { time: '9:00 AM',  title: 'Discover Campus', description: 'Student-led walk through 56 acres — trails, chapel, labs, dining, the whole vibe.', icon: 'footprints', location: 'Departs from Larson Hall' },
      { time: '10:10 AM', title: 'Discover Chapel', description: 'See inside our chapel and hear how faith shapes daily life on campus.', icon: 'church', location: 'Chapel' },
      { time: '11:20 AM', title: 'Discover Community', description: 'Meet current students and hear what life is actually like at NU.', icon: 'message', location: 'University Center' },
      { time: '12:00 PM', title: 'Send-Off', description: 'Quick wrap-up and directions to lunch.', icon: 'hand', location: 'Larson Hall' },
      { time: '12:30 PM', title: 'Choose Your Adventure — Lunch', description: 'Eat at Sæter, our campus dining hall. Come hungry.', icon: 'utensils', location: 'Sæter Dining Hall', track: 'all' },
      // Optional afternoon sessions
      { time: '12:30–1:20 PM', title: 'Class Visit', description: 'Sit in on a real NU class.', icon: 'book-open', location: 'Academic Buildings', track: 'students' },
      { time: '1:30–2:20 PM', title: 'Class Visit', description: 'Another class you can drop into.', icon: 'book-open', location: 'Academic Buildings', track: 'students' },
      { time: '2:30–3:20 PM', title: 'Class Visit', description: 'A third class option.', icon: 'book-open', location: 'Academic Buildings', track: 'students' },
      { time: '1:00–4:00 PM', title: 'Music Auditions', description: 'For prospective Music Production students.', icon: 'music', location: 'Creatio Studio', track: 'students' },
      { time: '2:30 PM',       title: 'Residence Hall Tour', description: 'See what dorm life looks like.', icon: 'home', location: 'Departs from Larson Hall', track: 'all' },
      { time: '3:30 PM',      title: 'Choralons', description: ' NU\'s auditioned choir — come hear them live.', icon: 'mic', location: 'Chapel', track: 'all' },
      { time: '12:30–4:00 PM', title: 'One-on-One Meetings', description: 'Meet individually with Admissions or Financial Aid staff.', icon: 'briefcase', location: 'Larson Hall', track: 'all' },
    ],

    faqs: [
      { q: 'Is parking free?', a: 'Yes — parking is free for all Discover NU guests. Pull into any visitor spot and grab a pass at check-in.', category: 'logistics' },
      { q: 'What should I wear?', a: 'Come as you are. This is PNW casual — jeans and sneakers are totally fine. The tour is partly outdoors so dress for the weather.', category: 'logistics' },
      { q: 'Can I stay for just part of the day?', a: 'Absolutely — you can come for the morning and leave at noon, or just show up for the afternoon sessions. No commitment required.', category: 'logistics' },
      { q: 'Can I bring younger siblings?', a: 'Kids are welcome, especially at lunch and the campus tour. Some afternoon classes may not be appropriate for young children — use your judgment.', category: 'logistics' },
      { q: 'How do I register each family member?', a: 'Each guest attending lunch needs their own registration, even if they\'re coming with a student.', category: 'logistics' },
      { q: 'What is the cancellation policy?', a: 'Email admissions@northwestu.edu at least 48 hours before your event and we\'ll move you to another date with no penalty.', category: 'logistics' },
      { q: 'Is my student expected to apply on the day?', a: 'Not at all. Discover NU is a no-pressure event. We want you to explore, ask questions, and figure out if NU feels right.', category: 'general' },
      { q: 'Will there be someone to talk about financial aid?', a: 'Yes — our financial aid team is at every Discover NU event. You can also ask us anything in the Q&A or swing by the table during lunch.', category: 'cost' },
      { q: 'How competitive is admissions?', a: 'We take a holistic approach — your student\'s character, story, and fit matter as much as grades. Our counselors can talk through your student\'s profile individually.', category: 'general' },
      { q: 'Can I get a feel for the spiritual environment?', a: 'Absolutely. We\'ll talk openly about faith at NU, including chapel, worship nights, and how spirituality shows up in and out of the classroom.', category: 'parents' },
      { q: 'What if my student is applying to multiple schools?', a: 'Completely normal. We\'ll give you the full picture of what makes NU unique, but we\'ll never pressure you.', category: 'parents' },
    ],

    bringItems: [
      { icon: 'footprints', text: 'Comfy shoes for the campus tour (partly outdoor, about 45 minutes)' },
      { icon: 'cloud-rain', text: 'Layers and a light jacket — Kirkland weather is unpredictable' },
      { icon: 'pen-line', text: 'Questions! Bring a list or just wing it' },
      { icon: 'smartphone', text: 'Your phone for photos and the campus app' },
      { icon: 'pill', text: 'Any personal meds / allergy epi-pens (we don\'t have these on hand)' },
    ],

    dressCode: 'PNW Casual',
    dressCodeTip: 'Jeans, sneakers, layers — totally fine. Nothing formal needed.',

    parentsTitle: 'A note for parents & guardians',
    parentsIntro: 'We know you\'re asking different questions than your student. Here\'s what matters to you — and how we\'ve got you covered.',
    parentsItems: [
      { icon: 'lock', title: 'Safety & wellbeing', body: 'Our campus is private, gated, and has 24/7 security. Students consistently tell us NU feels safe and like a real community.' },
      { icon: 'dollar-sign', title: 'Financial clarity', body: 'We\'ll walk through real scholarship scenarios, out-of-pocket costs, and what financial aid actually looks like. No surprises.' },
      { icon: 'presentation', title: 'Faculty accessibility', body: 'Class sizes average 18 students. Your student\'s professor will know their name by week two.' },
      { icon: 'car', title: 'Getting here', body: 'We\'re 20 minutes from Seattle, with easy parking on campus. SEA-TAC is about 35 minutes away.' },
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
    name: 'NU Overnight',
    tagline: 'Sleep in a dorm. Eat in the dining hall. Be an NU Eagle for 24 hours.',
    icon: 'moon',
    color: 'teal',
    shortDescription: 'Stay overnight with a student host, attend real classes, and see what a day in the life actually looks like.',
    description: 'NU Overnight is the closest you can get to being a student without enrolling. You\'ll stay in a residence hall with a trained, background-checked student host, eat dinner and breakfast in Sæter, sit in on real morning classes, and experience chapel and campus life after dark. Six dates across the school year — pick the one that fits your schedule.',
    heroImage: '/events/overnight-hero.jpg',
    videoPlaceholder: {
      thumbnail: '/events/overnight-video-thumb.jpg',
      label: 'What NU Overnight is really like',
    },
    registrationUrl: 'https://www.northwestu.edu/visit/nu-overnight',
    swoopShopUrl: 'https://shop.northwestu.edu',

    instances: [
      { date: '2026-10-02', label: 'Friday, October 2, 2026', timeStart: '4:00 PM', timeEnd: '11:00 AM next day' },
      { date: '2026-11-06', label: 'Friday, November 6, 2026', timeStart: '4:00 PM', timeEnd: '11:00 AM next day' },
      { date: '2027-01-22', label: 'Friday, January 22, 2027', timeStart: '4:00 PM', timeEnd: '11:00 AM next day' },
      { date: '2027-02-12', label: 'Friday, February 12, 2027', timeStart: '4:00 PM', timeEnd: '11:00 AM next day' },
      { date: '2027-03-05', label: 'Friday, March 5, 2027', timeStart: '4:00 PM', timeEnd: '11:00 AM next day' },
      { date: '2027-04-16', label: 'Friday, April 16, 2027', timeStart: '4:00 PM', timeEnd: '11:00 AM next day' },
    ],

    schedule: [
      { time: 'Day 1 · 4:00 PM', title: 'Check In & Meet Your Host', description: 'Get your nametag, drop your bag, and meet the student host you\'ll be staying with tonight.', icon: 'tag', location: 'Larson Hall Lobby' },
      { time: 'Day 1 · 4:30 PM', title: 'Campus Tour', description: 'Student-led walk through campus — trails, chapel, labs, and the spots students actually hang out.', icon: 'footprints', location: 'Departs from Larson Hall' },
      { time: 'Day 1 · 6:00 PM', title: 'Dinner at Sæter', description: 'Dinner in our campus dining hall with hosts and other overnight guests. Come hungry.', icon: 'utensils', location: 'Sæter Dining Hall', track: 'all' },
      { time: 'Day 1 · 7:30 PM', title: 'Evening Activity', description: 'Game night, worship night, or a student showcase — depends on the date, always a good time.', icon: 'music', location: 'University Center', track: 'students' },
      { time: 'Day 1 · 9:30 PM', title: 'Hall Hangout', description: 'Snacks, games, and honest conversation with current students in the residence hall lounge.', icon: 'message', location: 'Residence Hall', track: 'students' },
      { time: 'Day 1 · 11:00 PM', title: 'Lights Out', description: 'Settle in with your host. Residence halls are key-card access only, with overnight staff on duty.', icon: 'moon', location: 'Residence Hall', track: 'students' },
      { time: 'Day 2 · 7:30 AM', title: 'Breakfast at Sæter', description: 'The most important meal of the day, dining-hall style.', icon: 'utensils', location: 'Sæter Dining Hall', track: 'all' },
      { time: 'Day 2 · 8:30 AM', title: 'Class Visit', description: 'Sit in on a real NU class in your area of interest.', icon: 'book-open', location: 'Academic Buildings', track: 'students' },
      { time: 'Day 2 · 10:00 AM', title: 'Admissions Q&A + Wrap-Up', description: 'Final questions with the admissions team, plus next steps if NU feels right.', icon: 'briefcase', location: 'Larson Hall', track: 'all' },
      { time: 'Day 2 · 11:00 AM', title: 'Pick-Up', description: 'Parents pick up students at Larson Hall. Stick around for coffee with our team if you\'d like.', icon: 'car', location: 'Larson Hall', track: 'all' },
    ],

    faqs: [
      { q: 'Who will my student stay with?', a: 'Every overnight guest is paired with a trained, background-checked NU student host of the same gender, in a supervised residence hall.', category: 'parents' },
      { q: 'Do parents stay overnight too?', a: 'The overnight portion is students-only — it\'s designed to feel like real dorm life. Parents join for check-in and pick-up, and Kirkland has several hotels nearby if you\'re traveling.', category: 'parents' },
      { q: 'What should my student bring?', a: 'A sleeping bag or bedding, pillow, toiletries, and comfy clothes. See the full What to Bring list on this page.', category: 'logistics' },
      { q: 'Are meals included?', a: 'Yes — dinner, evening snacks, and breakfast are all included at no cost.', category: 'cost' },
      { q: 'Is the event really free?', a: 'Completely free. NU Overnight is our gift to students seriously considering NU.', category: 'cost' },
      { q: 'What if my student has allergies or dietary needs?', a: 'Note them on your registration and our dining team will have options ready at every meal.', category: 'logistics' },
      { q: 'What time is pick-up?', a: '11:00 AM the next morning at Larson Hall. You\'re welcome to come early for coffee with the admissions team.', category: 'logistics' },
      { q: 'Can I request a specific host?', a: 'If your student knows a current NU student, mention it during registration and we\'ll do our best to pair them.', category: 'general' },
      { q: 'What happens if my student feels uncomfortable?', a: 'Residence staff are on duty all night, and every host carries a direct line to our team. Your student can call you — or be picked up — at any time.', category: 'parents' },
      { q: 'Which class will my student visit?', a: 'We match class visits to the academic interest listed on your registration. Want a specific class? Email us ahead of time.', category: 'general' },
    ],

    bringItems: [
      { icon: 'moon', text: 'Sleeping bag or bedding + pillow (mattress is provided)' },
      { icon: 'briefcase', text: 'Toiletries and a towel' },
      { icon: 'cloud-rain', text: 'Comfy layers — pajamas, and a jacket for the evening walk' },
      { icon: 'smartphone', text: 'Phone + charger for photos and the campus app' },
      { icon: 'pill', text: 'Any personal meds / allergy epi-pens (staff don\'t carry these)' },
    ],

    dressCode: 'Sleepover Casual',
    dressCodeTip: 'Comfy clothes for day one, pajamas for the night, and something presentable for morning classes.',

    parentsTitle: 'A note for parents & guardians',
    parentsIntro: 'Sending your student to sleep on a college campus takes trust. Here\'s exactly how we keep them safe — and keep you in the loop.',
    parentsItems: [
      { icon: 'lock', title: 'Vetted hosts only', body: 'Every student host is background-checked, trained, and supervised by full-time residence life staff.' },
      { icon: 'home', title: 'Secure residence halls', body: 'Key-card access only, separated by gender, with overnight staff on duty and a 24/7 campus security line.' },
      { icon: 'message', title: 'Reachable all night', body: 'Your student keeps their phone, and our team shares a direct contact number at check-in. You can reach your student at any time.' },
      { icon: 'car', title: 'Simple drop-off & pick-up', body: 'Drop off at 4:00 PM Friday, pick up at 11:00 AM Saturday — both at Larson Hall. Free visitor parking.' },
    ],

    financialAid: {
      headline: 'Thinking about cost? So are we.',
      body: 'Over 90% of our students receive financial aid. Ask us about scholarships during the Saturday wrap-up — or before you even arrive.',
      ctaLabel: 'Explore scholarships →',
      ctaUrl: 'https://www.northwestu.edu/financial-aid',
    },
  },
]

export const useEvents = () => {
  const getEvent = (slug: string) => EVENTS.find(e => e.slug === slug) ?? null
  return { allEvents: EVENTS, getEvent }
}

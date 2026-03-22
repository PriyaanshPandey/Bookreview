import wingsOfFire from '/wof.webp'
import alchemist from '/alchemist.jpg'
import gggtm from '/gggtm.jpg'
import ikigai from '/ikigai.jpg'
import asGoodAsDead from '/asgood.jpg'
import ggbb from '/ggbb.webp'
import gandhi from '/gandhi.jpg'
import fault from '/fault.jpg'
import little from '/little.jpg'
import breath from '/breath.jpeg'
import villanelle from '/villianelle.jpg'
import goneGirl from '/goneGirl.png' 
import kevin from '/kevin.jpg'
import sharp from '/sharp.jpg'
import hardcastle from '/hardcastle.jpg'
import gothic from '/gothic.jpeg'
import silentPatient from '/silentpatient.jpg'
import closedDoors from '/closeddoors.jpeg'
import window from '/window.jpg'
import cerulean from '/cerulean.jpeg'
import legends from '/legends.jpg'
import beachRead from '/beachread.jpg'

export const reviews = [
  {
    id: 1,
    title: 'Wings of Fire',
    author: 'A.P.J. Abdul Kalam',
    coverImage: wingsOfFire,
    rating: 5,
    genre: 'Autobiography',
    tags: ['inspiring', 'science', 'india', 'resilience'],
    verdict: 'A soul-stirring journey from poverty to the stars',
    excerpt: 'Kalam narrates his life with humility and fire — from a small-town boy selling newspapers to becoming the missile man of India.',
    readDate: 'May 2025',
    pages: 197,
  },
  {
    id: 2,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    coverImage: alchemist,
    rating: 4,
    genre: 'Philosophical Fiction',
    tags: ['destiny', 'journey', 'spirituality', 'fable', 'self-discovery'],
    verdict: 'A fable that speaks softly but lingers forever.',
    excerpt: 'Santiago\'s journey across the desert is really a mirror held up to your own life.',
    readDate: 'January 2026',
    pages: 208,
  },
  {
    id: 3,
    title: 'A Good Girls Guide to Murder',
    author: 'Holly Jackson',
    coverImage: gggtm,
    rating: 5,
    genre: 'Thriller',
    tags: ['twists', 'gripping', 'dark'],
    verdict: 'Addictive from page one — a thriller that earns every twist.',
    excerpt: 'Holly Jackson delivers a gripping tale of mystery and suspense.',
    readDate: 'March 2026',
    pages: 400,
  },
  {
    id: 4,
    title: 'Good Girl Bad Blood',
    author: 'Holly Jackson',
    coverImage: ggbb,
    rating: 4,
    genre: 'Thriller',
    tags: ['sequel', 'slow burn', 'dark'],
    verdict: 'A worthy sequel that deepens the darkness.',
    excerpt: 'Pip is back, and this time she\'s podcasting her way into danger. Slightly slower than the first, but the emotional weight hits harder.',
    readDate: 'March 2026',
    pages: 401,
  },
  {
    id: 5,
    title: 'My Experiments with Truth',
    author: 'Mahatma Gandhi',
    coverImage: gandhi,
    rating: 4,
    genre: 'Autobiography',
    tags: ['philosophy', 'nonviolence', 'india', 'truth', 'self-discipline'],
    verdict: 'Brutally honest — a man holding himself to an impossible standard.',
    excerpt: 'Gandhi writes about his life the way he lived it — with radical transparency.',
    readDate: 'March 2025',
    pages: 500,
  },
]

export const currentlyReading = [
  {
    id: 1,
    title: 'As Good As Dead',
    author: 'Holly Jackson',
    coverImage: asGoodAsDead,
    progress: 35,
    startedDate: 'March 18, 2026',
    hyped: true,
    firstImpression: 'The finale Holly Jackson promised — darker and more personal than the first two. Pip feels genuinely cornered this time.',
    genre: 'Thriller',
  },
  {
    id: 2,
    title: 'Ikigai',
    author: 'Héctor García & Francesc Miralles',
    coverImage: ikigai,
    progress: 60,
    startedDate: 'March 10, 2026',
    hyped: true,
    firstImpression: 'Quietly life-changing. The Japanese philosophy of finding your reason to wake up feels surprisingly urgent to read right now.',
    genre: 'Non-fiction',
  },
]

export const moodRecs = [
  {
    id: 1,
    mood: 'Need a good cry',
    emoji: '🥀',
    color: '#FFC2D9',
    description: 'Books that will wreck you beautifully.',
    books: [
      { title: 'The Fault in Our Stars', author: 'John Green', coverImage: fault },
      { title: 'A Little Life', author: 'Hanya Yanagihara', coverImage: little },
      { title: 'When Breath Becomes Air', author: 'Paul Kalanithi', coverImage: breath },
    ],
  },
  {
    id: 2,
    mood: 'Villain era',
    emoji: '🖤',
    color: '#E8D4FF',
    description: 'Morally grey characters doing morally grey things.',
    books: [
      { title: 'Killing Eve: Codename Villanelle', author: 'Luke Jennings', coverImage: villanelle },
      { title: 'Gone Girl', author: 'Gillian Flynn', coverImage: goneGirl },
      { title: 'We Need to Talk About Kevin', author: 'Lionel Shriver', coverImage: kevin },
    ],
  },
  {
    id: 3,
    mood: 'Feeling chaotic',
    emoji: '🌪️',
    color: '#FFD966',
    description: 'Unpredictable reads that go completely off the rails.',
    books: [
      { title: 'Sharp Objects', author: 'Gillian Flynn', coverImage: sharp },
      { title: 'The Seven Deaths of Evelyn Hardcastle', author: 'Stuart Turton', coverImage: hardcastle },
      { title: 'Mexican Gothic', author: 'Silvia Moreno-Garcia', coverImage: gothic },
    ],
  },
  {
    id: 4,
    mood: "Can't sleep",
    emoji: '🌙',
    color: '#C8FFE8',
    description: "Books that'll keep you up anyway.",
    books: [
      { title: 'The Silent Patient', author: 'Alex Michaelides', coverImage: silentPatient },
      { title: 'Behind Closed Doors', author: 'B.A. Paris', coverImage: closedDoors },
      { title: 'The Woman in the Window', author: 'A.J. Finn', coverImage: window },
    ],
  },
  {
    id: 5,
    mood: 'Cosy & slow',
    emoji: '🌹',
    color: '#FFC2D9',
    description: 'Curl up and disappear for a few hours.',
    books: [
      { title: 'The House in the Cerulean Sea', author: 'TJ Klune', coverImage: cerulean },
      { title: 'Legends & Lattes', author: 'Travis Baldree', coverImage: legends },
      { title: 'Beach Read', author: 'Emily Henry', coverImage: beachRead },
    ],
  },
]
export const NOTES: Note[] = [
  {
    id: '1',
    title: 'Welcome to CozyNote',
    content:
      'This is your first note! CozyNote is a simple and beautiful note-taking app. Start capturing your thoughts, ideas, and memories.',
    createdAt: '2025-02-23T08:00:00Z',
    updatedAt: '2025-02-23T08:00:00Z',
  },
  {
    id: '2',
    title: 'Meeting Notes',
    content:
      'Discussed Q1 goals and project timelines. Action items: Review budget proposal, Schedule follow-up with design team, Prepare presentation for Friday.',
    createdAt: '2025-02-22T14:30:00Z',
    updatedAt: '2025-02-22T15:45:00Z',
  },
  {
    id: '3',
    title: 'Shopping List',
    content:
      '- Organic milk\n- Fresh bread\n- Avocados\n- Coffee beans\n- Dark chocolate\n- Olive oil\n- Pasta\n- Tomatoes',
    createdAt: '2025-02-21T09:15:00Z',
    updatedAt: '2025-02-21T09:15:00Z',
  },
  {
    id: '4',
    title: 'Book Recommendations',
    content:
      '1. Atomic Habits by James Clear\n2. Deep Work by Cal Newport\n3. The Psychology of Money\n4. Thinking, Fast and Slow\n5. The Almanack of Naval Ravikant',
    createdAt: '2025-02-20T19:00:00Z',
    updatedAt: '2025-02-20T19:00:00Z',
  },
  {
    id: '5',
    title: 'Workout Routine',
    content:
      'Monday: Upper body\nTuesday: Cardio\nWednesday: Lower body\nThursday: Rest\nFriday: Full body\nSaturday: Yoga\nSunday: Rest',
    createdAt: '2025-02-19T07:00:00Z',
    updatedAt: '2025-02-19T07:00:00Z',
  },
  {
    id: '6',
    title: 'Recipe: Morning Smoothie',
    content:
      'Ingredients:\n- 1 banana\n- 1 cup spinach\n- 1/2 cup frozen berries\n- 1 tbsp almond butter\n- 1 cup oat milk\n\nBlend until smooth. Enjoy!',
    createdAt: '2025-02-18T06:30:00Z',
    updatedAt: '2025-02-18T06:30:00Z',
  },
  {
    id: '7',
    title: 'Project Ideas',
    content:
      '- Personal portfolio website redesign\n- Mobile app for habit tracking\n- Open source contribution\n- Learn Rust programming\n- Build a CLI tool',
    createdAt: '2025-02-17T21:00:00Z',
    updatedAt: '2025-02-17T21:00:00Z',
  },
  {
    id: '8',
    title: 'Travel Bucket List',
    content:
      '🇯🇵 Japan - Cherry blossom season\n🇮🇸 Iceland - Northern lights\n🇳🇿 New Zealand - Hobbiton\n🇮🇹 Italy - Amalfi Coast\n🇬🇷 Greece - Santorini',
    createdAt: '2025-02-16T16:00:00Z',
    updatedAt: '2025-02-16T16:00:00Z',
  },
  {
    id: '9',
    title: 'Daily Affirmations',
    content:
      'I am capable of achieving my goals.\nI embrace challenges as opportunities.\nI am grateful for today.\nI choose positivity and growth.\nI am worthy of success and happiness.',
    createdAt: '2025-02-15T05:00:00Z',
    updatedAt: '2025-02-15T05:00:00Z',
  },
  {
    id: '10',
    title: 'App Features to Add',
    content:
      '- Dark mode toggle\n- Note categories/tags\n- Search functionality\n- Cloud sync\n- Share notes\n- Rich text formatting\n- Voice notes',
    createdAt: '2025-02-14T11:30:00Z',
    updatedAt: '2025-02-14T11:30:00Z',
  },
  {
    id: '11',
    title: 'Gratitude Journal',
    content:
      'Today I am grateful for:\n1. A warm cup of coffee\n2. Supportive friends and family\n3. Good health\n4. The opportunity to learn new things\n5. A cozy home',
    createdAt: '2025-02-13T22:00:00Z',
    updatedAt: '2025-02-13T22:00:00Z',
  },
  {
    id: '12',
    title: 'Podcast Episodes',
    content:
      'Must listen:\n- Huberman Lab: Sleep optimization\n- Lex Fridman: AI discussion\n- Tim Ferriss: Productivity hacks',
    createdAt: '2025-02-12T13:00:00Z',
    updatedAt: '2025-02-12T13:00:00Z',
  },
  {
    id: '13',
    title: 'Code Snippets',
    content:
      'Useful React patterns:\n- Custom hooks for data fetching\n- Context for global state\n- Memo for performance\n- Suspense for loading states',
    createdAt: '2025-02-11T10:00:00Z',
    updatedAt: '2025-02-11T10:00:00Z',
  },
  {
    id: '14',
    title: 'Weekend Plans',
    content:
      'Saturday:\n- Morning run at 7am\n- Brunch with Sarah\n- Afternoon coding session\n\nSunday:\n- Sleep in\n- Farmers market\n- Movie night',
    createdAt: '2025-02-10T18:00:00Z',
    updatedAt: '2025-02-10T18:00:00Z',
  },
 
];



export const getNoteById = (id: string): Note | undefined => {
  return NOTES.find((note) => note.id === id);
};




export const BACKGROUND_IMAGE =
  'https://github.com/user-attachments/assets/ce07d991-098a-4e14-a759-ecbb0c159b6b';

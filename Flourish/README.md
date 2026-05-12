# Flourish - Expo Router Tab Navigation App Brief

A beautiful plant care app built with React Native, Expo, and Expo Router for learning tab navigation.

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Run the app:
```bash
bun start
```

## Project Structure

```
src/
├── app/
│   ├── _layout.tsx           # Root layout with Stack
│   ├── (tabs)/               # Tab group
│   │   ├── _layout.tsx       # Tab navigator config
│   │   ├── index.tsx         # Home tab (implemented)
│   │   ├── explore.tsx       # Explore tab (TODO)
│   │   ├── search.tsx        # Search tab (TODO)
│   │   └── profile.tsx       # Profile tab (TODO)
│   └── plant/
│       └── [id].tsx          # Plant detail screen (TODO)
├── components/ui/
│   ├── screen.tsx
│   ├── squircle.tsx
│   └── text.tsx
├── lib/
│   ├── constants/index.ts    # Plant data
│   └── utils/index.ts        # Date helpers
└── types/
    └── plant.d.ts
```

## Your Task

This app brief teaches **Expo Router Tab Navigation**. The tab layout is already configured with 4 tabs, but only the Home tab is implemented.

### Screens to Build

1. **`explore.tsx`** - Browse plants by category
   - Add category filter pills (Indoor, Outdoor, Low Water, Pet Safe, Beginner)
   - Display plants in a vertical list with larger cards
   - Navigate to plant details on press

2. **`search.tsx`** - Search for plants
   - Add a search input with an icon
   - Filter `customPlants` by name as user types
   - Display matching results

3. **`profile.tsx`** - User profile
   - Display user avatar (use any plant image)
   - Show stats (plants owned, waterings)
   - Add "Currently..." status card
   - Include Edit Profile button

4. **`plant/[id].tsx`** - Plant detail screen
   - Back button navigation
   - Plant image in stacked card design
   - Quick info pills (water needs, light needs)
   - "About this plant" description card
   - Care details section

### Tab Navigation Concepts

The `(tabs)/_layout.tsx` shows how to:
- Configure `<Tabs>` with `screenOptions`
- Define individual `<Tabs.Screen>` with icons
- Use CSS variables for theming tab bar

### Navigation Between Tabs & Stack

```tsx
// From tab to stack screen
router.push(`/plant/${plant.id}`);

// Back from stack to tabs
router.back();
```

## Design System

- 🌿 Green nature theme (`#234823` primary)
- ☀️ Golden accent (`#ffce47`)
- 🟢 Squircle cards with smooth corners
- 📅 Week calendar header

## Available Data

- `customPlants` - Array of 5 plants with full details
- `getWeekDays(date)` - Helper for calendar display
- `Plant` interface - TypeScript type for plants


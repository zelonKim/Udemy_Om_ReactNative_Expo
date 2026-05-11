# CozyNote - Expo Router Stack Navigation

A beautiful note-taking app brief for learning Expo Router stack navigation.

## Overview

This app brief demonstrates stack navigation patterns including:
- Basic stack navigation with `Stack` component
- Dynamic routes with `[id]` parameter
- Native header configuration with `Stack.Screen`
- Header customization (left, right, title)
- Modal presentation styles

## Getting Started

```bash
# Install dependencies
bun install

# Start the app
bun start
```

## Learning Tasks

### 1. Set up Stack Navigator
Replace `<Slot />` in `_layout.tsx` with proper `<Stack>` configuration.

### 2. Build Note Detail Screen (`note/[id].tsx`)
- Add `BackButton` component at top
- Display note title and full content
- Add edit button linking to `/note/edit`

### 3. Build Create Note Screen (`note/new.tsx`)
- Add header with close button and "Create" action
- Implement title and content inputs
- Handle form submission

### 4. Build Edit Note Screen (`note/edit.tsx`)
- Pre-fill inputs with existing note data
- Add save functionality

### 5. Build Settings Screen (`settings.tsx`)
- Display app info
- Link to About screen

### 6. Build About Screen (`about.tsx`)
- Configure native header with `Stack.Screen`
- Add header buttons (back, share, info)
- Display app description

## Project Structure

```
src/
├── app/
│   ├── _layout.tsx      # Root stack navigator
│   ├── index.tsx        # Home screen (notes list)
│   ├── settings.tsx     # Settings screen
│   ├── about.tsx        # About screen (native header)
│   └── note/
│       ├── [id].tsx     # Note detail (dynamic route)
│       ├── new.tsx      # Create note
│       └── edit.tsx     # Edit note
├── components/
│   ├── screens/
│   │   └── home/
│   │       └── note-card.tsx
│   └── ui/
│       ├── back-button.tsx
│       ├── screen.tsx
│       ├── squircle.tsx
│       └── text.tsx
└── lib/
    └── constants/
        ├── index.ts
        └── notes.ts
```


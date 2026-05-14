import Note from '@/components/home/note';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './storage';

interface NoteListStoreInterface {
  notes: Note[];
  addNote: (note: Note) => void;
  updateNote: (id: string, note: { title: string }) => void;
  deleteNote: (id: string) => void;
  getNote: (id: string) => Note | undefined;
}

const useNotesStore = create()<NoteListStoreInterface>(
  persist(
    (set, get) => ({
      notes: [],
      addNote: (note: Note) => {
        const { notes } = get();
        const newNotes = [...notes, note];
        set({ notes: newNotes });
      },
      updateNote: (id: string, noteText: string) => {
        const { notes: existingNotes } = get();
        const updatedNotes = existingNotes.map((noteItem) => {
          if (id === noteItem.id) {
            const updatedNoteItem = {
              ...noteItem,
              title: noteText
            };
            return updatedNoteItem;
          }
          return noteItem;
        });
        set({
          notes: updatedNotes,
        });
      },
      deleteNote: (id: string) => {
        const { notes } = get();
        set({
          notes: notes.filter((note) => note.id !== id),
        });
      },
      getNote: (id: string) => {
        const { notes } = get();
        return notes.find((note) => note.id === id);
      },
    }),
    {
      name: 'note-storage',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useNotesStore;

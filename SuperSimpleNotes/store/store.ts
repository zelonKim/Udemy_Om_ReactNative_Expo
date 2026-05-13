import Note from '@/components/home/note';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './storage';

interface NoteListStoreInterface {
  notes: Note[];
  addNote: (note: Note) => void;
}


const useNotesStore = create<NoteListStoreInterface>()(
  persist(
    (set, get) => ({
      notes: [],
      
      addNote: (note: Note) => {
        const { notes } = get();
        const newNotes = [...notes, note];
        set({ notes: newNotes });
      },
    }),
    {
      name: 'note-storage',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);


export default useNotesStore;

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';

interface CollapseSwitcherState {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const useCollapseSidebar = create<CollapseSwitcherState>()(
  persist(
    (set) => ({
      isOpen: false,
      setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: 'isCollapsed',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

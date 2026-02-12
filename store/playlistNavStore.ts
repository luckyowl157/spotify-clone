import {create} from 'zustand'
import {persist,  createJSONStorage} from 'zustand/middleware'

interface ChangeViewState {
	viewMode: 'compact' | 'list';
	toggleViewMode: () => void;
	setViewMode: (mode: 'compact' | 'list') => void;
}

export const useNavActions = create<ChangeViewState>()(
  persist(
    (set) => ({
      viewMode: 'list',
      toggleViewMode: () => set((state) => ({ 
        viewMode: state.viewMode === 'list' ? 'compact' : 'list' 
      })),
      setViewMode: (mode) => set({ viewMode: mode }),
    }),
    {
      name: 'playlist-view',
      storage: createJSONStorage(() => localStorage),
    }
  ) 
);
import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface SidebarSwitcherState {
	viewMode: 'list' | 'grid' | 'compact' | 'compactGrid';
	setViewMode: (mode: 'list' | 'grid' | 'compact' | 'compactGrid') => void;
}

export const useSidebarSwitcherStore = create<SidebarSwitcherState>(
	persist(set => ({
		viewMode: 'list',
		setViewMode: mode => set({ viewMode: mode }),
	}),
	{
		name: 'view-mode-storage',
		storage: createJSONStorage(() => localStorage),
	}),
);
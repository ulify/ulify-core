import { create } from 'zustand';

export type ActionModeType = 'search' | 'ai'|'plugin';

export interface IGlobalStore {
  actionMode: ActionModeType;

  updateActionMode: (mode: ActionModeType) => void;
}

export const useGlobal = create<IGlobalStore>((set) => ({
  actionMode: 'search',
  updateActionMode: (mode: ActionModeType) => {
    set({ actionMode: mode });
  }
}));

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AppState {
  user: any | null;
  isAuthenticated: boolean;
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
}

interface AppActions {
  setUser: (user: any) => void;
  logout: () => void;
  toggleTheme: () => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

type AppStore = AppState & AppActions;

export const useAppStore = create<AppStore>()(
  devtools(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      theme: 'light',
      sidebarOpen: false,

      // Actions
      setUser: (user) => set({ user, isAuthenticated: !!user }, false, 'setUser'),

      logout: () => set({ user: null, isAuthenticated: false }, false, 'logout'),

      toggleTheme: () =>
        set(
          (state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }),
          false,
          'toggleTheme'
        ),

      setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }, false, 'setSidebarOpen'),

      toggleSidebar: () =>
        set((state) => ({ sidebarOpen: !state.sidebarOpen }), false, 'toggleSidebar'),
    }),
    {
      name: 'app-store',
    }
  )
);

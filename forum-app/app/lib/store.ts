import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const store = persist(
  (set) => ({
    modalOpen: false,
    modalType: "register",
    setModalOpen: () =>
      set((store: any)=>({modalOpen: !store.modalOpen}))
  }),
  {
    name: 'modal-storage',
    storage: createJSONStorage(() => sessionStorage),
  }
);

export const useStore = create(store);
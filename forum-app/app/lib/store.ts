import { create } from 'zustand';

const store = (
  (set : any) => ({
    modalOpen: false,
    modalType: "register",
    setModalOpen: () =>
      set((store: any)=>({modalOpen: !store.modalOpen}))
  })
);

export const useStore = create(store);
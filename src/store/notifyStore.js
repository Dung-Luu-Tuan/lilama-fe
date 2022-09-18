import create from "zustand";

export const notifyStore = create(() => ({
  show: false,
  message: ""
}));

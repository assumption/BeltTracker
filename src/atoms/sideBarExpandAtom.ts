import { atom } from "jotai";

export const showSideBarExpandedAtom = atom<boolean>(false);

export const isSideBarClosingAtom = atom(false);

export const startSideBarClosingAtom = atom(null, (get, set) => {
    if (get(isSideBarClosingAtom)) {
        return;
    }

    set(isSideBarClosingAtom, true);
    set(showSideBarExpandedAtom, false);

    setTimeout(() => {
        set(isSideBarClosingAtom, false);
    }, 250);
});

export const setShowSideBarExpandedAtom = atom(
    (get) => get(showSideBarExpandedAtom),
    (_, set, next: boolean) => {
        if (next) {
            set(showSideBarExpandedAtom, true);
            set(isSideBarClosingAtom, false);
        } else {
            set(startSideBarClosingAtom);
        }
    }
);
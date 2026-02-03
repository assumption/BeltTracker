import { atom } from 'jotai';

export const showHelpModalAtom = atom(false);

export const isHelpModalClosingAtom = atom(false);

export const startHelpModalClosingAtom = atom(null, (get, set) => {
    if (get(isHelpModalClosingAtom)) {
        return;
    }

    set(isHelpModalClosingAtom, true);

    setTimeout(() => {
        set(showHelpModalAtom, false);
        set(isHelpModalClosingAtom, false);
    }, 250);
});

export const setShowHelpModalAtom = atom(
    (get) => get(showHelpModalAtom),
    (_, set, next: boolean) => {
        if (next) {
            set(showHelpModalAtom, true);
            set(isHelpModalClosingAtom, false);
        } else {
            set(startHelpModalClosingAtom);
        }
    }
);

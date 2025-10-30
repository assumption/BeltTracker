import { atom } from 'jotai';

export const showModalAtom = atom(false);

export const isModalClosingAtom = atom(false);

export const startModalClosingAtom = atom(null, (get, set) => {
    if (get(isModalClosingAtom)) {
        return;
    }

    set(isModalClosingAtom, true);

    setTimeout(() => {
        set(showModalAtom, false);
        set(isModalClosingAtom, false);
    }, 250);
});

export const setShowModalAtom = atom(
    (get) => get(showModalAtom),
    (_, set, next: boolean) => {
        if (next) {
            set(showModalAtom, true);
            set(isModalClosingAtom, false);
        } else {
            set(startModalClosingAtom);
        }
    }
);
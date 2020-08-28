export const LAYOUT_DARK = 'LAYOUT_DARK' as const;

export interface LayoutDarkAction {
    type: typeof LAYOUT_DARK
}

export const LayoutDark = ():LayoutDarkAction => {
    return {
        type: "LAYOUT_DARK"
    }
}

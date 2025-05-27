/**
 * TODO: Use scale for quiz
 */
export const parseLevel = (level: number): {rawLevel: number; scale: number | null} => {
    if (level <= 0xff) {
        return {rawLevel: level, scale: null};
    }

    const rawLevel = level & 0xff;
    const scale = (level >> 8) & 0xff;

    return {rawLevel, scale};
};

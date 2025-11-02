import {createContext, use} from 'react';
import type {Card} from '@/types/entity';

export const TargetCardContext = createContext<Card | null>(null);
export const useTargetCard = () => {
    const context = use(TargetCardContext);
    if (context === null) {
        throw new Error('useTargetCard must be used within a TargetCardContext');
    }
    return context;
};

export const CardContext = createContext<Card | null>(null);
export const useCard = () => {
    const context = use(CardContext);
    if (context === null) {
        throw new Error('useCard must be used within a CardContext');
    }
    return context;
};

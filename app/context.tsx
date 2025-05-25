import {createContext, useContext} from 'react';
import type {Card} from '@/types/entity';

const TargetCardContext = createContext<Card | null>(null);
export const TargetCardProvider = TargetCardContext.Provider;
export const useTargetCard = () => {
    const context = useContext(TargetCardContext);
    if (context === null) {
        throw new Error('useTargetCard must be used within a TargetCardProvider');
    }
    return context;
};

const CardContext = createContext<Card | null>(null);
export const CardProvider = CardContext.Provider;
export const useCard = () => {
    const context = useContext(CardContext);
    if (context === null) {
        throw new Error('useCard must be used within a CardProvider');
    }
    return context;
};

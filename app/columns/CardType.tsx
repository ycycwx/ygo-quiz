import {useCard, useTargetCard} from '../context';

export const CardTypeColumn = () => {
    const {cardTypes} = useCard();
    const {cardTypes: targetCardTypes} = useTargetCard();
    const targetSet = new Set(targetCardTypes);
    return (
        <div className="flex items-center gap-2">
            {cardTypes.length
                ? cardTypes.map((cardType, index) => {
                    const isTarget = targetSet.has(cardType);
                    return (
                        <span key={index} className={isTarget ? 'text-green-500' : ''}>
                            {cardType}
                        </span>
                    );
                })
                : <span className={targetSet.size === 0 ? 'text-green-500' : ''}>/</span>}
        </div>
    );
};

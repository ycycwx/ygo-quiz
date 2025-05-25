import {useCard, useTargetCard} from '../context';

export const CategoryColumn = () => {
    const {categoryTypes} = useCard();
    const {categoryTypes: targetCategoryTypes} = useTargetCard();
    const targetSet = new Set(targetCategoryTypes);
    return (
        <div className="flex items-center gap-2">
            {categoryTypes.length
                ? categoryTypes.map((category, index) => {
                    const isTarget = targetSet.has(category);
                    return (
                        <span key={index} className={isTarget ? 'text-green-500' : ''}>
                            {category}
                        </span>
                    );
                })
                : <span className={targetSet.size === 0 ? 'text-green-500' : ''}>/</span>}
        </div>
    );
};

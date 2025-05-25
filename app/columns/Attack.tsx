import {useCard, useTargetCard} from '../context';

export const AttackColumn = () => {
    const {atk} = useCard();
    const {atk: targetAtk} = useTargetCard();
    return (
        <div className="flex items-center gap-2">
            <span className={atk === targetAtk ? 'text-green-500' : ''}>{atk}</span>
            {atk > targetAtk ? '↓' : atk < targetAtk ? '↑' : null}
        </div>
    );
};

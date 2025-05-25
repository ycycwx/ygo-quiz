import {useCard, useTargetCard} from '../context';

export const LevelColumn = () => {
    const {level} = useCard();
    const {level: targetLevel} = useTargetCard();
    return (
        <div className="flex items-center gap-2">
            <span className={level === targetLevel ? 'text-green-500' : ''}>{level}</span>
            {level > targetLevel ? '↓' : level < targetLevel ? '↑' : null}
        </div>
    );
};

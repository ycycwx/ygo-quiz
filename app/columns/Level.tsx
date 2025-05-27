import {useCard, useTargetCard} from '../context';

export const LevelColumn = () => {
    const {rawLevel} = useCard();
    const {level: targetRawLevel} = useTargetCard();
    return (
        <div className="flex items-center gap-2">
            <span className={rawLevel === targetRawLevel ? 'text-green-500' : ''}>{rawLevel}</span>
            {rawLevel > targetRawLevel ? '↓' : rawLevel < targetRawLevel ? '↑' : null}
        </div>
    );
};

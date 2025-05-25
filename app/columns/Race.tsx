import {useCard, useTargetCard} from '../context';

export const RaceColumn = () => {
    const {raceTypes} = useCard();
    const {raceTypes: targetRaceTypes} = useTargetCard();
    const targetSet = new Set(targetRaceTypes);
    return (
        <div className="flex items-center gap-2">
            {raceTypes.map((race, index) => {
                const isTarget = targetSet.has(race);
                return (
                    <span key={index} className={isTarget ? 'text-green-500' : ''}>
                        {race}
                    </span>
                );
            })}
        </div>
    );
};

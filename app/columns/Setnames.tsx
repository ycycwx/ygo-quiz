import {useCard, useTargetCard} from '../context';

export const SetnamesColumn = () => {
    const {setnames} = useCard();
    const {setnames: targetSetnames} = useTargetCard();
    const targetSet = new Set(targetSetnames);
    return (
        <div className="flex items-center gap-2">
            {setnames.length
                ? setnames.map((setname, index) => {
                    const isTarget = targetSet.has(setname);
                    return (
                        <span key={index} className={isTarget ? 'text-green-500' : ''}>
                            {setname}
                        </span>
                    );
                })
                : <span className={targetSet.size === 0 ? 'text-green-500' : ''}>/</span>}
        </div>
    );
};

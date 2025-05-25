import {useCard, useTargetCard} from '../context';

const findIntersection = (name: string, targetName: string) => {
    const setA = new Set(name.split(''));
    const setB = new Set(targetName.split(''));
    return setA.intersection(setB);
};

export const NameColumn = () => {
    const {name} = useCard();
    const {name: targetName} = useTargetCard();
    if (name === targetName) {
        return (
            <div className="flex items-center">
                <span className="text-green-500">{name}</span>
            </div>
        );
    }

    const intersection = findIntersection(name, targetName);
    return (
        <div className="flex items-center">
            {name.split('').map((letter, index) => {
                if (!intersection.has(letter)) {
                    return letter;
                }

                return (
                    <span key={index} className="text-green-500">
                        {letter}
                    </span>
                );
            })}
        </div>
    );
};

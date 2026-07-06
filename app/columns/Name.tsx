import {useCard, useTargetCard} from '../context';

export const NameColumn = () => {
    const {name} = useCard();
    const {name: targetName} = useTargetCard();
    if (name === targetName) {
        return <span className="text-green-500">{name}</span>;
    }

    const targetCharacters = new Set(targetName);

    return (
        <span>
            {Array.from(name, (character, index) =>
                targetCharacters.has(character)
                    ? (
                        <span key={index} className="text-green-500">
                            {character}
                        </span>
                    )
                    : character,
            )}
        </span>
    );
};

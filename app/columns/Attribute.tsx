import {useCard, useTargetCard} from '../context';

export const AttributeColumn = () => {
    const {attributeTypes} = useCard();
    const {attributeTypes: targetAttributeTypes} = useTargetCard();
    const targetSet = new Set(targetAttributeTypes);
    return (
        <div className="flex items-center gap-2">
            {
                attributeTypes.map((attributeType, index) => {
                    const isTarget = targetSet.has(attributeType);
                    return (
                        <span
                            key={index}
                            className={isTarget ? 'text-green-500' : ''}
                        >
                            {attributeType}
                        </span>
                    );
                })
            }
        </div>
    );
};

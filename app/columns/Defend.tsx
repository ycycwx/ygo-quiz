import {isLinkMonster} from '@/lib/parsers/type';
import {useCard, useTargetCard} from '../context';

export const DefendColumn = () => {
    const {def, type} = useCard();
    const {def: targetDef, type: targetType} = useTargetCard();
    if (isLinkMonster(type)) {
        return (
            <div className="flex items-center gap-2">
                <span className={isLinkMonster(targetType) ? 'text-green-500' : ''}>/</span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2">
            <span className={def === targetDef ? 'text-green-500' : ''}>{def}</span>
            {def > targetDef ? '↓' : def < targetDef ? '↑' : null}
        </div>
    );
};

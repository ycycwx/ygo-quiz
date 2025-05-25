import {useReducer} from 'react';
import {Button} from '@/components/ui/button';

export const Cheats = ({name}: {name: string}) => {
    const [canShow, dispatch] = useReducer(on => !on, false);
    return (
        <div className="flex items-center gap-2">
            <Button variant="outline" className="cursor-pointer" onClick={dispatch}>
                {canShow ? 'Hide' : 'Show'} Cheats
            </Button>
            {canShow ? <span>{name}</span> : null}
        </div>
    );
};

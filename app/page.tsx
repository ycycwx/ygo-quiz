'use client';

import {useReducer, useState} from 'react';
import useSWRImmutable from 'swr/immutable';
import {Button} from '@/components/ui/button';
import {Search} from './Search';
import ShowCase from './ShowCase';
import {Cheats} from './Cheats';
import {fetcher} from './fetcher';
import type {Card} from '@/types/entity';

interface QuizState {
    isSuccess: boolean;
    showAnswer: boolean;
}

interface QuizAction {
    type: 'success' | 'showAnswer' | 'restart';
}

export default function Quiz() {
    const [{isSuccess, showAnswer}, dispatch] = useReducer<QuizState, [QuizAction]>(
        (state, action) => {
            switch (action.type) {
                case 'success':
                    return {...state, isSuccess: true};
                case 'showAnswer':
                    return {...state, showAnswer: true};
                case 'restart':
                    return {...state, isSuccess: false, showAnswer: false};
                default:
                    return state;
            }
        },
        {
            isSuccess: false,
            showAnswer: false,
        },
    );
    const [items, setItems] = useState<Card[]>([]);
    const {data, mutate} = useSWRImmutable('/api/cards/random/top', fetcher);
    if (!data) {
        return null;
    }

    const restart = () => {
        dispatch({type: 'restart'});
        setItems([]);
        mutate();
    };

    const handleSelect = (option: Card) => {
        if (data.id === option.id) {
            dispatch({type: 'success'});
        }

        setItems(prev => [...prev, option]);
    };

    return (
        <div className="flex flex-col gap-2">
            {process.env.NODE_ENV === 'development' ? <Cheats name={data.name} /> : null}
            {showAnswer || isSuccess ? null : <Search disabled={items.map(({id}) => id)} onSelect={handleSelect} />}
            <ShowCase target={data} items={items} />
            <div className="flex items-center gap-2">
                {
                    isSuccess
                        ? <div>恭喜回答正确，共消耗 {items.length} 次机会</div>
                        : showAnswer ? data.name : (
                            <Button
                                variant="outline"
                                className="min-w-auto cursor-pointer"
                                onClick={() => dispatch({type: 'showAnswer'})}
                            >
                                查看答案
                            </Button>
                        )
                }
                <Button variant="outline" className="min-w-auto cursor-pointer" onClick={restart}>
                    重新开始
                </Button>
            </div>
        </div>
    );
}

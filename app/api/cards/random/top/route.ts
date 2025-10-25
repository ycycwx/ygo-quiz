import {NextResponse} from 'next/server';
import {db} from '@/lib/db';
import top from '@/public/db/top.json';
import {processData} from '@/lib/processor';
import type {DBCard} from '@/types/entity';

const stmt = db.prepare<[number], DBCard>(`
    SELECT d.*, t.name
    FROM datas d
    JOIN texts t ON d.id = t.id
    WHERE d.id = ?
`);

const pickRandom = (cards: number[]) => {
    return cards[Math.floor(Math.random() * cards.length)];
};

export const GET = async () => {
    const items = stmt.all(pickRandom(top.monster.map(item => item.id)));
    if (!items.length) {
        // TODO: throw error?
        return NextResponse.json({});
    }

    return NextResponse.json(processData(items[0]));
};

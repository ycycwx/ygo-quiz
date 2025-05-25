import {NextResponse} from 'next/server';
import {db} from '@/lib/db';
import {processData} from '@/lib/processor';
import type {DBCard} from '@/types/entity';

const stmt = db.prepare<[], DBCard>(`
    SELECT d.*, t.name
    FROM datas d
    JOIN texts t ON d.id = t.id
    WHERE (d.type & 1) != 0 AND d.alias = 0 AND d.atk != -2 AND d.def != -2
    ORDER BY RANDOM()
    LIMIT 1;
`);

export const GET = async () => {
    const items = stmt.all();
    return NextResponse.json(processData(items[0]));
};

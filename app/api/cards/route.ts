import {NextResponse} from 'next/server';
import {db} from '@/lib/db';
import {processData} from '@/lib/processor';
import type {NextRequest} from 'next/server';
import type {DBCard} from '@/types/entity';

const stmt = db.prepare<[string, string], DBCard>(`
    SELECT d.*, t.name
    FROM datas d
    JOIN texts t ON d.id = t.id
    WHERE (d.type & 1) != 0 AND t.name LIKE ? AND d.alias = 0 AND d.atk != -2 AND d.def != -2
    LIMIT ?;
`);

export const GET = async (req: NextRequest) => {
    const name = req.nextUrl.searchParams.get('name') ?? '';
    const limit = req.nextUrl.searchParams.get('limit') ?? '50';
    if (!name.trim() || isNaN(Number(limit))) {
        return NextResponse.json({});
    }

    const items = stmt.all(`%${name}%`, limit);
    return NextResponse.json(items.map(processData));
};

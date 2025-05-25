import {NextResponse} from 'next/server';
import {db} from '@/lib/db';
import {processData} from '@/lib/processor';
import type {NextRequest} from 'next/server';
import type {DBCard} from '@/types/entity';

const stmt = db.prepare<[string], DBCard>(`
    SELECT d.*, t.name
    FROM datas d
    JOIN texts t ON d.id = t.id
    WHERE d.id = ?
`);

export const GET = async (_: NextRequest, {params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
    if (!id.trim()) {
        return NextResponse.json({});
    }

    const items = stmt.all(id);
    if (!items.length) {
        // TODO: throw error?
        return NextResponse.json({});
    }

    return NextResponse.json(processData(items[0]));
};

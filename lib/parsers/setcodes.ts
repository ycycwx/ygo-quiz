import fs from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

interface SetnameEntry {
    setcode: number;
    name: string;
    alias?: string;
}

interface ParsedData {
    setnames: SetnameEntry[];
}

function parseStringsFile(filePath: string): ParsedData {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    const setnames: SetnameEntry[] = [];

    for (const line of lines) {
        if (line.startsWith('#') || line.trim() === '') {
            continue;
        }

        const setnameMatch = line.match(/^!setname\s+(0x[0-9a-fA-F]+)\s+([^\t]+)(?:\t(.+))?$/);
        if (setnameMatch) {
            const setcode = parseInt(setnameMatch[1], 16);
            const name = setnameMatch[2].trim();
            const alias = setnameMatch[3]?.trim();

            setnames.push({setcode, name, alias});
        }
    }

    return {setnames};
}

const filePath = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'db', 'strings.conf');
const parsedData = parseStringsFile(filePath);

export function getSetnamesBySetcode(setcode: number): string[] {
    const setnamesList = new Set<string>();

    for (let i = 0; i < 4; i++) {
        const group = (setcode >> (i * 16)) & 0xffff;
        if (group === 0) {
            continue;
        }

        const entry = parsedData.setnames.find(set => set.setcode === group);
        if (entry) {
            setnamesList.add(entry.name);
        }
    }

    return Array.from(setnamesList);
}

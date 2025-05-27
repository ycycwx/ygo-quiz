import Database from 'better-sqlite3';
import path from 'node:path';

const dbPath = path.resolve(process.cwd(), 'public', 'db', 'cards.cdb');

export const db = new Database(dbPath);

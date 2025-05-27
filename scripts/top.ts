// Bun: Fetch data from the API and save into /db/top.json
import fs from 'node:fs';
import {join} from 'node:path';

const PATH =
    'https://sapi.moecube.com:444/ygopro/analytics/single/type?type=day&lang=cn&extra=name&source=mycard-athletic';

const response = await fetch(PATH);
if (!response.ok) {
    throw new Error('Network response was not ok');
}

fs.writeFileSync(
    join(process.cwd(), 'public', 'db', 'top.json'),
    JSON.stringify(await response.json(), null, 4),
);

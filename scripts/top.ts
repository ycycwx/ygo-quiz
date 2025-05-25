// Bun: Fetch data from the API and save into /db/top.json
import fs from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const PATH =
    'https://sapi.moecube.com:444/ygopro/analytics/single/type?type=day&lang=cn&extra=name&source=mycard-athletic';

const response = await fetch(PATH);
if (!response.ok) {
    throw new Error('Network response was not ok');
}

fs.writeFileSync(
    join(dirname(fileURLToPath(import.meta.url)), '..', 'db', 'top.json'),
    JSON.stringify(await response.json(), null, 4)
);

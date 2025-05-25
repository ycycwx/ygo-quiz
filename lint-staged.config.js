/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
    '**/*.{js,ts,tsx}': 'eslint --fix',
};

export default lintStagedConfig;

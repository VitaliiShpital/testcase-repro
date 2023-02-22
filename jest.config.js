process.env.TZ = 'UTC';

module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript',
    setupFiles: ['./jest.setup.ts'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.svg$': '<rootDir>/tests/unit/mock/svgTransform.js',
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    }
};

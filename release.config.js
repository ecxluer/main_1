module.exports = {
    branches: ['main'], // Гілка, на якій ви хочете проводити версіонування
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        [
            "@semantic-release/npm",
            {
                "npmPublish": false
            }
        ],
        '@semantic-release/github',
    ],
};

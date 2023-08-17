module.exports = {
    branches: ['main'], // Гілка, на якій ви хочете проводити версіонування
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/github',
        [
            "@semantic-release/npm",
            {
                "npmPublish": false
            }
        ],
        [
            '@semantic-release/git',
            {
                assets: [
                    'CHANGELOG.md',
                    'package.json'
                ]
            }
        ]
    ],
};

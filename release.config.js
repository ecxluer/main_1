module.exports = {
    branches: ['main'], // Гілка, на якій ви хочете проводити версіонування
    plugins: [
        'semantic-release-unsquash',
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
                message: 'chore(release): ${nextRelease.version} [skip ci]'
            }
        ]
    ],
};

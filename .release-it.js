const version = '${version}';

module.exports = {
    plugins: {
        '@release-it/conventional-changelog': {
            path: '.',
            infile: 'CHANGELOG.md',
            preset: 'conventionalcommits',
            gitRawCommitsOpts: {
                path: '.',
            },
        },
    },
    git: {
        push: true,
        tag: true,
        tagName: `${version}`,
        commitsPath: '.',
        commitMessage: `chore: release ${version}`,
        requireCommits: true,
        requireCommitsFail: false,
        requireCleanWorkingDir: false,
    },
    npm: {
        publish: false,
        // versionArgs: ['--workspaces false'],
    },
    hooks: {
        'before:git:release': [
            'git add --all',
        ],
    },
    gitlab: {
        release: true,
        releaseName: "Release ${version}",
        // git changelog will be used as release notes
        // releaseNotes: null,
        milestones: [],
        tokenRef: "GITLAB_TOKEN",
        tokenHeader: "Private-Token",
        certificateAuthorityFile: null,
        assets: null,
        origin: null,
        skipChecks: false
    }
};

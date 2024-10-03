export async function pullAndAnalyzeCsv() {
    const csvText = await fetch('http://localhost:3000/data.csv')
            .then(res => {return res.text()})
            .catch(console.log);

    // Object contributions
    const contributions = parseCsvFunctional(csvText);
    // console.log(contributions);

    // The first project's name in ascending alphabetic order
    const firstProjectName = getFirstProjectName(contributions);

    // console.log(firstProjectName[0]); // "abdera"

    // The number of unique contributors
    const uniqueContributors = unique(contributions, contribution => contribution.username);
    const totalContributors = uniqueContributors.length;
    // console.log(totalContributors); // 3977

    const averageLength = averageLengthContributorName(uniqueContributors);
    // console.log(averageLength); // 14.148101584108625

    const contributorProjectsCount = groupBy(contributions, contribution => contribution.username);
    const projectCount = Object.keys(contributorProjectsCount).length;

    const sortedContributorProjectsByCount = sortBy(Object.entries(contributorProjectsCount), a => a[1], 'desc');
    // const sortedContributorProjectsByName = sortBy(Object.entries(contributorProjectsCount), a => a[0], 'asc');
    const mostActiveContributor = fetchTop10(sortedContributorProjectsByCount)[0][0];

    // console.log(fetchTop10(sortedContributorProjectsByCount)); // [ 'jim', 185 ],           [ 'jukka', 156 ],    [ 'bdelacretaz', 141 ],
    // console.log(fetchTop10(sortedContributorProjectsByName)); // [ '?', 3 ], [ '.', 2 ], [ '4632', 1 ],
    // console.log(mostActiveContributor) // [ 'jim', 185 ]

    const contributionProjectsCount = groupBy(contributions, contribution => contribution.projectName);
    // const sortedContributionProjectsByCount = sortBy(Object.entries(contributionProjectsCount), a => a[1], 'desc');

    // console.log(fetchTop10(sortedContributorProjectsByCount)); //   [ 'incubator', 3866 ], [ 'Apache Software Foundation', 1551 ], [ 'member', 1460 ], [ 'apsite', 1086 ], [ 'ws', 666 ], [ 'incubator-pmc', 536 ], [ 'pmc-chairs', 439 ], [ 'openoffice', 378 ], [ 'httpd', 356 ],  [ 'commons', 343 ]

    return {
        totalContributors,
        projectCount,
        mostActiveContributor,
        averageLength,
        firstProjectName
    };
}

export function averageLengthContributorName(contributors) {
    const totalLength = contributors.reduce((cpt, contributors) => cpt + contributors.realName.length, 0);
    return totalLength / contributors.length;
}

export function getFirstProjectName(contributions) {
    return contributions
        .map(contribution => contribution.projectName)
        .sort((a, b) => a.localeCompare(b));
}

export function parseCsvImperative(csvText) {
    const data = csvText.split('\n').map(row => row.split(','));
    const headers = ['username', 'realName', 'website', 'projectName'];
    const rows = data.slice(1);
    const contributions = [];

    for (const row of rows) {
        const contribution = {};

        for (let i = 0; i < headers.length; i++) {
            contribution[headers[i]] = row[i];
            contribution['website'] = contribution['website'] === '' ? null : contribution['website'];
        }

        contributions.push(contribution);
    }

    return contributions;
}

export function parseCsvFunctional(csvText) {
    const data = csvText.split('\n').map(row => row.split(','));
    const headers = ['username', 'realName', 'website', 'projectName'];
    const rows = data.slice(1);

    return rows.map(row => {
        return row.reduce((acc, cell, index) => {
            acc[headers[index]] = cell;
            acc['website'] = acc['website'] === '' ? null : acc['website'];
            return acc;
        }, {});
    });
}

export function unique(array, keySelector) {
    return array.filter((element, index, self) =>
        index === self.findIndex((e) => keySelector(e) === keySelector(element))
    );
}

export function groupBy(array, keySelector) {
    return array.reduce((acc, element) => {
        const key = keySelector(element);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(element);
        return acc;
    }, {});
}

export function sortBy(array, keySelector, order = 'asc') {
    return array.sort((a, b) => {
        const keyA = keySelector(a);
        const keyB = keySelector(b);

        if (keyA < keyB) {
            return order === 'asc' ? -1 : 1;
        }

        if (keyA > keyB) {
            return order === 'asc' ? 1 : -1;
        }

        return 0;
    });
}

export function fetchTop10(array) {
    return array.slice(0, 10).map(entry => [entry[0], entry[1].length]);
}

pullAndAnalyzeCsv().catch(console.error);

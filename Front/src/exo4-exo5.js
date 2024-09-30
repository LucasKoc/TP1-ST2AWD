fetch('http://localhost:3000/data.csv')
    .then(res => res.text())
    .then(processData)
    .catch(console.log);

function processData(csvText) {

    // Object contributions
    const contributions = parseCsvFunctional(csvText);
    // console.log(contributions);

    // The first project's name in ascending alphabetic order
    const firstProjectName = contributions
        .map(contribution => contribution.projectName)
        .sort((a, b) => a.localeCompare(b));

    // console.log(firstProjectName[0]); // "abdera"

    // The number of unique contributors
    const uniqueContributors = unique(contributions, contribution => contribution.username);

    // console.log(uniqueContributors.length); // 3977
    const totalLength = uniqueContributors.reduce((cpt, contributors) => cpt + contributors.realName.length, 0);
    const averageLength = totalLength / uniqueContributors.length;

    // console.log(averageLength); // 14.148101584108625
    const contributorProjectsCount = groupBy(contributions, contribution => contribution.username);

    const sortedContributorProjectsByCount = sortBy(Object.entries(contributorProjectsCount), a => a[1], 'desc');
    const sortedContributorProjectsByName = sortBy(Object.entries(contributorProjectsCount), a => a[0], 'asc');

    // console.log(fetchTop10(sortedContributorProjectsByCount)); // [ 'jim', 185 ],           [ 'jukka', 156 ],    [ 'bdelacretaz', 141 ],
    // console.log(fetchTop10(sortedContributorProjectsByName)); // [ '?', 3 ], [ '.', 2 ], [ '4632', 1 ],
    // console.log(fetchTop10(sortedContributorProjectsByCount)[0]) // [ 'jim', 185 ]

    const contributionProjectsCount = groupBy(contributions, contribution => contribution.projectName);
    const sortedContributionProjectsByCount = sortBy(Object.entries(contributionProjectsCount), a => a[1], 'desc');

    // console.log(fetchTop10(sortedContributionProjectsByCount)); //   [ 'incubator', 3866 ], [ 'Apache Software Foundation', 1551 ], [ 'member', 1460 ], [ 'apsite', 1086 ], [ 'ws', 666 ], [ 'incubator-pmc', 536 ], [ 'pmc-chairs', 439 ], [ 'openoffice', 378 ], [ 'httpd', 356 ],  [ 'commons', 343 ]
}

function parseCsvImperative(csvText) {
    const data = csvText.split('\n').map(row => row.split(','));
    const headers = ['username', 'realName', 'website', 'projectName'];
    const rows = data.slice(1);
    const contributions = [];

    for (const row of rows) {
        const contribution = {};

        for (let i = 0; i < headers.length; i++) {
            contribution[headers[i]] = row[i];
            contribution['website'] = contribution['website'] == '' ? null : contribution['website'];
        }

        contributions.push(contribution);
    }

    return contributions;
}

function parseCsvFunctional(csvText) {
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

function unique(array, keySelector) {
    return array.filter((element, index, self) =>
        index === self.findIndex((e) => keySelector(e) === keySelector(element)))
}

function groupBy(array, keySelector) {
    return array.reduce((acc, element) => {
        const key = keySelector(element);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(element);
        return acc;
    }, {});
}

function sortBy(array, keySelector, order = 'asc') {
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

function fetchTop10(array) {
    let store = [];
    for (let i = 0; i <= 10; i++) {
        store.push([array[i][0], array[i][1].length]);
    }
    return store
}

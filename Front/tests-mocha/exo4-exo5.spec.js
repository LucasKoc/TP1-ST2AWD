import { expect } from 'chai';
import { parseCsvImperative, parseCsvFunctional, pullAndAnalyzeCsv } from '../src/exo4-exo5.js';

describe('ex. 4', function () {
    const csvText = `username,realName,website,projectName\njohndoe,John Doe,http://example.com,Project Alpha\njanedoe,Jane Doe,,Project Beta`;

    const expectedOutput = [
        { username: 'johndoe', realName: 'John Doe', website: 'http://example.com', projectName: 'Project Alpha' },
        { username: 'janedoe', realName: 'Jane Doe', website: null, projectName: 'Project Beta' }
    ];

    describe('parseCsvImperative(csvText)', function () {
        it('should ignore the header line', function () {
            const result = parseCsvImperative(csvText);
            expect(result.length).to.eq(2); // Ignored header, only two rows left
        });

        it('should have [username, realName, website, projectName] on each contribution', function () {
            const result = parseCsvImperative(csvText);
            result.forEach(contribution => {
                expect(contribution).to.have.keys('username', 'realName', 'website', 'projectName');
            });
        });

        it('should parse username, realName, and projectName', function () {
            const result = parseCsvImperative(csvText);
            expect(result).to.deep.equal(expectedOutput);
        });

        it('should set website to null if not provided', function () {
            const result = parseCsvImperative(csvText);
            expect(result[1].website).to.eq(null); // second row has no website
        });
    });

    describe('parseCsvFunctional(csvText)', function () {
        it('should ignore the header line', function () {
            const result = parseCsvFunctional(csvText);
            expect(result.length).to.eq(2); // Ignored header, only two rows left
        });

        it('should have [username, realName, website, projectName] on each contribution', function () {
            const result = parseCsvFunctional(csvText);
            result.forEach(contribution => {
                expect(contribution).to.have.keys('username', 'realName', 'website', 'projectName');
            });
        });

        it('should parse username, realName, and projectName', function () {
            const result = parseCsvFunctional(csvText);
            expect(result).to.deep.equal(expectedOutput);
        });

        it('should set website to null if not provided', function () {
            const result = parseCsvFunctional(csvText);
            expect(result[1].website).to.eq(null); // second row has no website
        });
    });
});

describe('ex. 5', function () {
    describe('pullAndAnalyzeCsv()', function () {
        it('should compute various statistics about contributors', function (done) {
            // Max time for this test is 1458ms
            this.timeout(1458);

            pullAndAnalyzeCsv().then(stats => {
                expect(stats).to.be.an('object');
                expect(stats.totalContributors).to.be.a('number');
                expect(stats.projectCount).to.be.a('number');
                expect(stats.mostActiveContributor).to.be.a('string');
                expect(stats.totalContributors).to.be.gt(0);
                done();
            })
                .catch(done);
        });
    });
});


const skillsFileName = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFileName);
skills.rows.forEach((row) => {
	if (row.charclass !== '') {
		if (row.perdelay !== '') {
			row.perdelay = config.perdelay;
		}
	}
});
D2RMM.writeTsv(skillsFileName, skills);

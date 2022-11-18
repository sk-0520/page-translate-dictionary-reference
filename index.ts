import path from 'path';
import fs from 'fs';

import Localhost from './webpage/localhost/localhost';
import ExampleComJa from './webpage/example.com/example.com-ja';
import GitHubCom from './webpage/github.com/github.com';

const outputDirectory = path.resolve(__dirname, 'dist');

const dictionaries = [
	new Localhost(),
	new ExampleComJa(),
	new GitHubCom(),
].map(i => {
	return i.create();
}).map(i => ({
	name: i.name + '.json',
	setting: i,
}));

if (!fs.existsSync(outputDirectory)) {
	fs.mkdirSync(outputDirectory);
}

for (const item of dictionaries) {
	const outputFilePath = path.join(outputDirectory, item.name);
	const outputContent = JSON.stringify(item.setting, undefined, 2);

	console.info('OUTPUT', outputFilePath);
	fs.writeFileSync(outputFilePath, outputContent);
}

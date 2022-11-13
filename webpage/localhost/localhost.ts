import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';

export default class Localhost implements webpage.SettingFactory {
	//#region SettingFactory

	public create(): setting.SiteSetting {
		const result: setting.SiteSetting = {
			name: 'localhost-test',
			version: '0.0.1',
			information: {
				repository: 'https://github.com/sk-0520/page-translation-dictionary-reference',
			},
			hosts: [
				'localhost:*'
			],
			priority: 0,
			language: 'ja',
			path: {
				"/": {
					// セレクタに対する処理
					query: [
						{
							selector: {
								value: "ul li",
								all: true
							},
							text: {
								matches: [
									{
										pattern: "A",
										replace: {
											value: "A!",
										}
									},
									{
										pattern: "B",
										replace: {
											value: "B!",
										}
									},
									{
										pattern: "D",
										replace: {
											value: "D!",
										}
									},
								],
								replace: {
									value: "まっちしない"
								}
							}
						}
					]
				}
			}
		};

		return result;
	}

	//#endregion
}

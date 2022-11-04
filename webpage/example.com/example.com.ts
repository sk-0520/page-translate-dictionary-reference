import * as webpage from '../webpage';
import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';

export default class ExampleCom implements webpage.SettingFactory {
	//#region SettingFactory

	public create(): setting.SiteSetting {
		const result: setting.SiteSetting = {
			name: 'example.com@ja',
			version: '0.0.1',
			information: {
				repository: 'https://github.com/sk-0520/page-translation-dictionary-reference',
			},
			hosts: [
				'example.com'
			],
			level: 0,
			language: 'ja',
		};

		return result;
	}

	//#endregion
}

import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';
import { CommonSelector, CommonSelectorSetting } from './github-common-selector';
import { CommonText, CommonTextSetting } from './github-common-text';
import { CommonQuery, CommonQuerySetting } from './github-common-query';

import top from './github-top';
import login from './github-login';
import user from './github-user';
import source_tree from './github-source-tree';
import issues from './github-issues';

export default class GitHubCom implements webpage.SettingFactory {
	//#region SettingFactory

	public create(): setting.SiteSetting {
		const result: setting.SiteSetting = {
			name: 'github.com@ja',
			version: '0.00.001',
			information: {
				repository: 'https://github.com/sk-0520/page-translation-dictionary-reference',
			},
			hosts: [
				'github.com'
			],
			level: 0,
			language: 'ja',
			path: {},
			common: {
				selector: {},
				text: {},
				query: {},
			},
		};

		const paths = [
			top(),
			login(),
			user(),
			source_tree(),
			issues(),
		];
		for (const item of paths) {
			result.path![item.pattern.source] = item.setting;
		}

		for (const [key, value] of CommonSelectorSetting) {
			result.common!.selector![CommonSelector[key]] = value;
		}
		for (const [key, value] of CommonTextSetting) {
			result.common!.text![CommonText[key]] = value;
		}
		console.log(CommonQuerySetting);
		for (const [key, value] of CommonQuerySetting) {
			result.common!.query![CommonQuery[key]] = value;
		}

		return result;
	}

	//#endregion
}

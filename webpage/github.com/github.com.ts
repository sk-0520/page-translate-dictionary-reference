import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';
import { CommonSelector, CommonSelectorSetting } from './github-common-selector';
import { CommonText, CommonTextSetting } from './github-common-text';
import { CommonQuery, CommonQuerySetting } from './github-common-query';

import top from './github-top';
import login from './github-login';
import user from './github-user';
import source_tree from './github-source-tree';
import source_blob from './github-source-blob';
import issues from './github-issues';

export default class GitHubCom implements webpage.SettingFactory {
	//#region SettingFactory

	public create(): setting.SiteSetting {
		const result: setting.SiteSetting = {
			name: 'github.com-ja',
			version: '0.0.1',
			information: {
				repository: 'https://github.com/sk-0520/page-translation-dictionary-reference',
			},
			hosts: [
				'github.com'
			],
			priority: 0,
			language: 'ja',
			watch: {
				document: [
					'pjax:end',
					'turbo:render',
				]
			},
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
			source_blob(),
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
		for (const [key, value] of CommonQuerySetting) {
			result.common!.query![CommonQuery[key]] = value;
		}

		return result;
	}

	//#endregion
}

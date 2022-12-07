//import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';
import { CommonQuery } from './github-common-query';

/**
 * 設定
 */
export default function get(): webpage.PathPair {
	return {
		pattern: /^\/([a-zA-Z0-9_-]+)\/([\.a-zA-Z0-9_-]+)\/settings/,
		setting: {
			query: [
				//#region
				//#endregion
			],
			import: [
				...Object.keys(CommonQuery).filter(i => !(/^\d+$/.test(i))),
			]
		}
	};
}

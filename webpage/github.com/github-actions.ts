//import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';
import { CommonQuery } from './github-common-query';
//import { CommonText } from './github-common-text';

/**
 * アクション
 */
export default function get(): webpage.PathPair {
	return {
		pattern: /^\/([a-zA-Z0-9_-]+)\/([\.a-zA-Z0-9_-]+)\/actions(\/(workflows|caches))?/,
		setting: {
			query: [
				//#region
				{
					selector: {
						value: "h3.f3"
					},
					text: {
						replace: {
							value: "アクション",
						}
					}
				},
				{
					selector: {
						value: "a[href$='/actions/new']",
						all: true
					},
					text: {
						replace: {
							value: "新規ワークフロー",
						}
					}
				},
				{
					selector: {
						value: "a[href$='/actions'] .ActionList-item-label"
					},
					text: {
						replace: {
							value: "全てのワークフロー"
						}
					}
				}
				//#endregion
			],
			import: [
				...Object.keys(CommonQuery).filter(i => !(/^\d+$/.test(i))),
			]
		}
	};
}

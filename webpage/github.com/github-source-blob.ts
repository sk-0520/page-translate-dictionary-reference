//import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';
import { CommonQuery } from './github-common-query'

/**
 * ファイル表示
 */
export default function get(): webpage.PathPair {
	return {
		pattern: /^\/([a-zA-Z0-9_-]+)\/([\.a-zA-Z0-9_-]+)\/blob/,
		setting: {
			query: [
			],
			import: [
				//
				CommonQuery[CommonQuery.QUERY_SEARCH],
				CommonQuery[CommonQuery.QUERY_LOGIN],
				CommonQuery[CommonQuery.QUERY_SIGN_UP],
				CommonQuery[CommonQuery.QUERY_UPDATED],
				//
				CommonQuery[CommonQuery.QUERY_LABEL_REPOSITORY_STATUS],
				CommonQuery[CommonQuery.QUERY_LABEL_RELEASE_STATUS],
				CommonQuery[CommonQuery.QUERY_RELATIVE_TIME],
				//
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_PIN],
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_WATCH],
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_FORK],
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_STAR],
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_CODE],
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_ISSUES],
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_PR],
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_ACTIONS],
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_PROJECT],
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_WIKI],
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_SECURITY],
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_INSIGHTS],
				CommonQuery[CommonQuery.QUERY_REPOSITORY_HEADER_SETTING],
			]
		},
	};
}

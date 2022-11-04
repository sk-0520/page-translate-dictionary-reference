//import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';

/**
 * ルート(ログイン状態と非ログイン状態でクソほど変わる)
 */
export default function get(): webpage.PathPair {
	return {
		pattern: /^\/$/,
		setting: {
			query: []
		}
	};

}

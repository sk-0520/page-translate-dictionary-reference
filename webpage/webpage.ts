import * as setting from '../page-translation-dictionary/source/scripts/extension/setting';

export type PathPair = { pattern: RegExp, setting: setting.PathSetting };

export interface SettingFactory {
	//#region function

	create(): setting.SiteSetting

	//#endregion
}

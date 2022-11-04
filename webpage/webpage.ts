import * as setting from '../page-translation-dictionary/source/scripts/extension/setting';

export interface SettingFactory
{
	//#region function

	create(): setting.SiteSetting

	//#endregion
}

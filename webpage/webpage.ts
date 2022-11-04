import * as setting from '../page-translation-dictionary/source/scripts/extension/setting';

export type PathPair = { pattern: RegExp, setting: setting.PathSetting };

/**
 * テキストノード特別指定(条件指定を想定)
 */
export enum TextNode {
	/** 最初に見つかったテキストノードで処理終了 */
	FirstOccurrence = -1,
	/** テキストノード全て対象とする */
	All = -2,
}

export interface SettingFactory {
	//#region function

	create(): setting.SiteSetting

	//#endregion
}

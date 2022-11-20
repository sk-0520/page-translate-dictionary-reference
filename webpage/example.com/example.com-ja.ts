import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';
import ExampleCom from './example.com';

export default class ExampleComJa implements webpage.SettingFactory {
	//#region SettingFactory

	public create(): setting.SiteSetting {
		const result: setting.SiteSetting = {
			name: 'example.com-ja',
			version: ExampleCom.version,
			information: ExampleCom.information,
			hosts: ExampleCom.hosts,
			priority: ExampleCom.priority,
			language: 'ja',
			path: {
				"^/$": {
					query: [
						{
							selector: {
								value: "body p:nth-child(2)"
							},
							text: {
								replace: {
									mode: "normal",
									value: "このドメインは文書例として使用するものです。 このドメインを文書に掲載する場合、事前の調整や許可を得ずに使用可能です。"
								}
							}
						},
						{
							selector: {
								value: "body p:nth-child(3) a"
							},
							text: {
								replace: {
									mode: "normal",
									value: "詳しくはこちら..."
								}
							}
						}
					]
				}
			}
		};

		return result;
	}

	//#endregion
}

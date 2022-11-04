import * as webpage from '../webpage';
import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';

export default class ExampleCom implements webpage.SettingFactory {
	//#region SettingFactory

	public create(): setting.SiteSetting {
		const result: setting.SiteSetting = {
			name: 'example.com@ja',
			version: '0.0.1',
			information: {
				repository: 'https://github.com/sk-0520/page-translation-dictionary-reference',
			},
			hosts: [
				'example.com'
			],
			level: 0,
			language: 'ja',
			"path": {
				"/": {
					// セレクタに対する処理
					"query": [
						{
							"selector": {
								"value": "body p:nth-child(2)"
							},
							// 対象要素の textContent
							"text": {
								"replace": {
									"mode": "normal",
									"value": "このドメインは文書例として使用するものです。 このドメインは文書に掲載する場合、事前の調整や許可を得ずに使用可能です。"
								}
							}
						},
						{
							"selector": {
								"value": "body p:nth-child(3) a"
							},
							"text": {
								"replace": {
									"mode": "normal",
									"value": "詳しくはこちら..."
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

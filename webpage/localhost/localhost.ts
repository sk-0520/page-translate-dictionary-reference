import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';
import info from '../info';

export default class Localhost implements webpage.SettingFactory {
	//#region SettingFactory

	public create(): setting.SiteSetting {
		const result: setting.SiteSetting = {
			name: 'localhost-test',
			version: info.version,
			information: {
				repository: 'https://github.com/sk-0520/page-translation-dictionary-reference',
			},
			hosts: [
				'localhost:*'
			],
			priority: 0,
			language: 'ja',
			path: {
				"/": {
					// セレクタに対する処理
					query: [
						{
							selector: {
								value: "ul li",
								all: true,
							},
							text: {
								matches: [
									{
										pattern: "A",
										replace: {
											value: "A!",
										}
									},
									{
										pattern: "B",
										replace: {
											value: "B!",
										}
									},
									{
										pattern: "D",
										replace: {
											value: "D!",
										}
									},
								],
								replace: {
									value: "まっちしない"
								}
							}
						},
						{
							selector: {
								value: "#p",
								all: true,
							},
							text: {
								matches: [
									{
										pattern: "a",
										replace: {
											value: "AA",
										}
									},
									{
										pattern: "i",
										replace: {
											value: "II",
										}
									},
									{
										pattern: "u",
										replace: {
											value: "UU",
										}
									},
									{
										pattern: "e",
										replace: {
											value: "EE",
										}
									},
									{
										pattern: "o",
										replace: {
											value: "OO",
										}
									},
								],
							}
						},
						{
							selector: {
								value: "#event"
							},
							attributes: {
								'TiTlE': {
									replace: {
										value: 'おん'
									}
								},
								'onclick': {
									replace: {
										value: 'alert(2)'
									}
								},
								'lang': {
									replace: {
										value: 'ja'
									}
								}
							}
						},
					]
				}
			}
		};

		return result;
	}

	//#endregion
}

//import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';

/**
 * ログインページ
 */
export default function get(): webpage.PathPair {
	return {
		pattern: /^\/(login)|(session)/,
		setting: {
			query: [
				{
					selector: {
						value: "h1"
					},
					text: {
						replace: {
							value: "GitHubにサインイン"
						}
					}
				},
				{
					selector: {
						value: "#js-flash-container .js-flash-alert"
					},
					text: {
						replace: {
							value: "ユーザー名かパスワードが正しくありません"
						}
					}
				},
				{
					selector: {
						value: "label[for='login_field']"
					},
					text: {
						replace: {
							value: "ユーザー名かメールアドレス"
						}
					}
				},
				{
					selector: {
						value: "label[for='password']"
					},
					text: {
						replace: {
							value: "パスワード"
						}
					}
				},
				{
					selector: {
						value: "a[href='/password_reset']"
					},
					text: {
						replace: {
							value: "パスワードをお忘れですか？"
						}
					}
				},
				{
					selector: {
						value: ".login-callout",
						node: 1
					},
					text: {
						replace: {
							value: "GitHubは初めてですか？"
						}
					}
				},
				//*
				//value 変えるの良くないって
				{
					selector: {
						value: "input[type='submit']",
					},
					attributes: {
						'value': {
							replace: {
								value: "サインイン"
							}
						},
						'data-signin-label': {
							replace: {
								value: "サインイン"
							}
						},
						'data-disable-with': {
							replace: {
								value: "サインイン中..."
							}
						},
					}
				},
				//*/
			]
		}
	};

}

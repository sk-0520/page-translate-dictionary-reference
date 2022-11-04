//import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';
import { CommonQuery } from './github-common-query'

/**
 * ユーザーページ(組織は構造が違うので辛いんだわ)
 */
export default function get(): webpage.PathPair {
	return {
		pattern: /^\/([a-zA-Z0-9_-]+)\/?$/,
		setting: {
			query: [
				//#region ヘッダ(人)
				{
					selector: {
						value: "nav a[data-tab-item='overview']",
						node: 2,
						all: true,
					},
					text: {
						replace: {
							value: "概要"
						}
					}
				},
				{
					selector: {
						value: "nav a[data-tab-item='repositories']",
						node: 2,
						all: true,
					},
					text: {
						replace: {
							value: "リポジトリ"
						}
					}
				},
				{
					selector: {
						value: "nav a[data-tab-item='projects']",
						node: 2,
						all: true,
					},
					text: {
						replace: {
							value: "プロジェクト"
						}
					}
				},
				{
					selector: {
						value: "nav a[data-tab-item='packages']",
						node: 2,
						all: true,
					},
					text: {
						replace: {
							value: "パッケージ"
						}
					}
				},
				{
					selector: {
						value: "nav a[data-tab-item='stars']",
						node: 2,
						all: true,
					},
					text: {
						replace: {
							value: "スター"
						}
					}
				},
				{
					selector: {
						value: ".user-status-message-wrapper .color-fg-muted"
					},
					text: {
						replace: {
							value: "ステータスを設定"
						}
					}
				},
				{
					selector: {
						value: ".user-following-container .follow a.btn-block"
					},
					text: {
						replace: {
							value: "フォローする"
						}
					}
				},
				{
					selector: {
						value: ".js-profile-editable-area  button.btn-block"
					},
					text: {
						replace: {
							value: "プロファイル編集"
						}
					}
				},
				{
					selector: {
						value: "a[href$='?tab=achievements']"
					},
					text: {
						replace: {
							value: "実績"
						}
					}
				},
				{
					selector: {
						value: ".js-profile-editable-replace details summary[role='button']"
					},
					text: {
						matches: [
							{
								pattern: "Block or Report",
								replace: {
									value: "ブロックまたは報告"
								}
							}
						]
					}
				},
				//#endregion
				//#region ヘッダ(組織)
				/*
				{
				selector: {
					value: "nav[aria-label='Organization'] a[href$='/repositories']",
					node: -1
					},
				text: {
					matches: {
						pattern: "Repositories"
						},
					replace: {
						value: "リポジトリ"
						}
					}
				},
				{
				selector: {
					value: "nav a[href$='/projects']",
					node: 2
					},
				text: {
					replace: {
						value: "リポジトリ"
						}
					}
				},
				{
				selector: {
					value: "nav a[href$='/packages']",
					node: 2
					},
				text: {
					replace: {
						value: "パッケージ"
						}
					}
				},
				*/
				//#endregion
				//#region 概要
				{
					selector: {
						value: "h2.text-normal",
						node: 1
					},
					text: {
						matches: [
							{
								pattern: "Pinned",
								replace: {
									value: "固定されたリポジトリ",
								}
							},
						]
					}
				},
				// 芝公件数(直近)
				{
					selector: {
						value: ".js-yearly-contributions h2"
					},
					text: {
						matches: [
							{
								mode: "regex",
								pattern: "(?<COUNTER>[1-9][0-9,]+)[\\s\\S]+in\\s+the\\s+last\\s+year",
								replace: {
									//"value": "${COUNTER} * ${YEAR}",
									value: "直近年の貢献数 $<COUNTER>",
								}
							}
						],
					}
				},
				// 芝公件数(年指定)
				{
					selector: {
						value: ".js-yearly-contributions h2"
					},
					text: {
						matches: [
							{
								mode: "regex",
								pattern: "(?<COUNTER>[1-9][0-9,]+)[\\s\\S]+in\\s+(?<YEAR>[0-9]+)",
								replace: {
									value: "$<YEAR> 年の貢献数 $<COUNTER>",
								}
							}
						],
					}
				},
				// 芝: 月
				{
					selector: {
						value: ".js-yearly-contributions svg .ContributionCalendar-label",
						all: true
					},
					text: {
						matches: [
							{
								pattern: "Jan",
								replace: {
									value: "1月",
								}
							},
							{
								pattern: "Feb",
								replace: {
									value: "2月",
								}
							},
							{
								pattern: "Mar",
								replace: {
									value: "3月",
								}
							},
							{
								pattern: "Apr",
								replace: {
									value: "4月",
								}
							},
							{
								pattern: "May",
								replace: {
									value: "5月",
								}
							},
							{
								pattern: "May",
								replace: {
									value: "5月",
								}
							},
							{
								pattern: "Jun",
								replace: {
									value: "6月",
								}
							},
							{
								pattern: "Jul",
								replace: {
									value: "7月",
								}
							},
							{
								pattern: "Aug",
								replace: {
									value: "8月",
								}
							},
							{
								pattern: "Sep",
								replace: {
									value: "9月",
								}
							},
							{
								pattern: "Oct",
								replace: {
									value: "10月",
								}
							},
							{
								pattern: "Nov",
								replace: {
									value: "11月",
								}
							},
							{
								pattern: "Dec",
								replace: {
									value: "12月",
								}
							}
						],
					}
				},
				// 芝: 週
				{
					selector: {
						value: ".js-yearly-contributions svg .ContributionCalendar-label",
						all: true
					},
					text: {
						matches: [
							{
								pattern: "Mon",
								replace: {
									value: "月曜",
								}
							},
							{
								pattern: "Wed",
								replace: {
									value: "水曜",
								}
							},
							{
								pattern: "Fri",
								replace: {
									value: "金曜",
								}
							},
						]
					}
				},
				// Learn how we count contributions
				{
					selector: {
						value: "a[href='https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile']",
					},
					text: {
						replace: {
							value: "貢献度の算出方法について",
						}
					}
				},
				// 芝: less .... more
				{
					selector: {
						value: ".js-yearly-contributions .float-right.color-fg-muted",
						node: -2
					},
					text: {
						matches: [
							{
								pattern: "Less",
								replace: {
									value: "少 "
								}
							},
							{
								pattern: "More",
								replace: {
									value: " 多"
								}
							},
						]
					}
				},
				{
					selector: {
						value: "#js-contribution-activity h2"
					},
					text: {
						replace: {
							value: "貢献状態"
						}
					}
				},
				{
					selector: {
						value: ".contribution-activity-listing h3 span",
						all: true,
					},
					text: {
						matches: [
							{
								mode: "regex",
								pattern: "(?<MONTH>\\w+)\\s+(\\d+,\\s+)?(?<YEAR>[1-9][0-9][0-9][0-9])",
								replace: {
									value: "$<YEAR>年 $<MONTH>月",
									regex: {
										MONTH: {
											January: "1",
											February: "2",
											March: "3",
											April: "4",
											May: "5",
											June: "6",
											July: "7",
											August: "8",
											September: "9",
											October: "10",
											November: "11",
											December: "12",
										}
									}
								}
							}
						]
					}
				},
				{
					selector: {
						value: ".contribution-activity-listing .TimelineItem-body details summary > span",
						all: true,
					},
					text: {
						matches: [
							{
								mode: "regex",
								pattern: "Created\\s+(?<COMMIT>\\d+)\\s+commits?\\s+in\\s+(?<REPOSITORY>\\d+)\\s+repositor(ies|y)",
								replace: {
									value: "$<REPOSITORY> リポジトリにおいて $<COMMIT> コミットが行われました"
								}
							},
							{
								mode: "regex",
								pattern: "Created\\s+(?<REPOSITORY>\\d+)\\s+repositories",
								replace: {
									value: "リポジトリが $<REPOSITORY> 個作成されました"
								}
							},
							{
								mode: "regex",
								pattern: "Created\\s+(?<REPOSITORY>\\d+)\\s+repositories",
								replace: {
									value: "リポジトリが $<REPOSITORY> 個作成されました"
								}
							},
						]
					}
				},
				{
					selector: {
						value: ".contribution-activity-listing .TimelineItem-body details :not(summary) a[href*='commits?']",
						all: true,
					},
					text: {
						matches: [
							{
								mode: "regex",
								pattern: "(?<COMMIT>\\d+)\\s+commits?",
								replace: {
									value: "$<COMMIT> コミット"
								}
							},
						]
					}
				},
				{
					selector: {
						value: "#js-contribution-activity form:last-child > button",
					},
					text: {
						replace: {
							value: "さらに表示"
						},
					},
					attributes: {
						'data-disable-with': {
							replace: {
								// text を設定すると動かねんだわ
								value: "読み込み中"
							}
						}
					}
				},
				//#endregion
				//#region リポジトリ
				{
					selector: {
						value: "#your-repos-filter",
					},
					attributes: {
						placeholder: {
							replace: {
								value: "リポジトリ検索..."
							}
						}
					}
				},
				{
					selector: {
						value: "a[href='/new']",
						node: 2,
						all: true
					},
					text: {
						replace: {
							value: "新規作成"
						}
					}
				},
				{
					selector: {
						value: "#type-options summary > span"
					},
					text: {
						replace: {
							value: "タイプ"
						}
					}
				},
				{
					selector: {
						value: "#type-options [role='menu'] header > span"
					},
					text: {
						replace: {
							value: "絞り込み(タイプ)"
						}
					}
				},
				{
					selector: {
						value: "#type-options [role='menu'] [role='menuitemradio'] .text-normal",
						all: true,
					},
					text: {
						matches: [
							{
								pattern: "All",
								replace: {
									value: "全て"
								}
							},
							{
								pattern: "Sources",
								replace: {
									value: "ソース"
								}
							},
							{
								pattern: "Forks",
								replace: {
									value: "フォーク"
								}
							},
							{
								pattern: "Archived",
								replace: {
									value: "アーカイブ"
								}
							},
							{
								pattern: "Mirrors",
								replace: {
									value: "ミラー"
								}
							},
							{
								pattern: "Templates",
								replace: {
									value: "テンプレート"
								}
							},
						]
					}
				},
				{
					selector: {
						value: "#language-options summary > span"
					},
					text: {
						replace: {
							value: "言語"
						}
					}
				},
				{
					selector: {
						value: "#language-options [role='menu'] header > span"
					},
					text: {
						replace: {
							value: "絞り込み(言語)"
						}
					}
				},
				{
					selector: {
						value: "#sort-options summary > span"
					},
					text: {
						replace: {
							value: "ソート"
						}
					}
				},
				{
					selector: {
						value: "#sort-options [role='menu'] header > span"
					},
					text: {
						replace: {
							value: "並び順"
						}
					}
				},
				{
					selector: {
						value: "#sort-options [role='menu'] [role='menuitemradio'] .text-normal",
						all: true,
					},
					text: {
						matches: [
							{
								pattern: "Last updated",
								replace: {
									value: "最終更新"
								}
							},
							{
								pattern: "Name",
								replace: {
									value: "名前"
								}
							},
							{
								pattern: "Star",
								replace: {
									value: "スター"
								}
							},
						]
					}
				},
				//#endregion
			],
			import: [
				//
				CommonQuery[CommonQuery.QUERY_SEARCH],
				CommonQuery[CommonQuery.QUERY_LOGIN],
				CommonQuery[CommonQuery.QUERY_SIGN_UP],
				CommonQuery[CommonQuery.QUERY_UPDATED],
				//
				CommonQuery[CommonQuery.QUERY_LABEL_REPOSITORY_STATUS],
				CommonQuery[CommonQuery.QUERY_RELATIVE_TIME],
				//
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

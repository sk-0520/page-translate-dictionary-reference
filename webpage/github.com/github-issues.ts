//import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';
import { CommonQuery } from './github-common-query';
import { CommonText } from './github-common-text';

/**
 * 課題一覧/課題詳細/プルリク
 */
export default function get(): webpage.PathPair {
	return {
		pattern: /^\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_-]+)\/(issues(\/(\\d+)|(new))?)|(labels)|(milestones)|(pulls)/,
		setting: {
			query: [
				//#region 課題一覧
				// ヘッダ
				{
					selector: {
						value: "#filters-select-menu summary",
						node: 1,
					},
					text: {
						replace: {
							value: "フィルタ"
						}
					}
				},
				{
					selector: {
						value: "#filters-select-menu summary + .SelectMenu .SelectMenu-title"
					},
					text: {
						replace: {
							value: "絞り込み"
						}
					}
				},
				{
					selector: {
						value: "#filters-select-menu .SelectMenu-list .SelectMenu-item",
						node: webpage.TextNode.FirstOccurrence,
						all: true
					},
					text: {
						matches: [
							{
								pattern: "Open issues and pull requests",
								replace: {
									value: "開かれている課題とプルリクエスト"
								}
							},
							{
								pattern: "Your issues",
								replace: {
									value: "あなたの課題"
								}
							},
							{
								pattern: "Your pull requests",
								replace: {
									value: "あなたのプルリクエスト"
								}
							},
							{
								pattern: "Everything assigned to you",
								replace: {
									value: "あなたに割り当てられた一覧"
								}
							},
							{
								pattern: "Everything mentioning you",
								replace: {
									value: "あなたに関係する一覧"
								}
							},
						]
					}
				},
				{
					selector: {
						value: "#filters-select-menu a[href$='/articles/searching-issues'] strong",
					},
					text: {
						replace: {
							value: "検索方法について"
						}
					}
				},
				{
					selector: {
						value: "#js-issues-search"
					},
					attributes: {
						"placeholder": {
							replace: {
								value: "全ての課題を検索"
							}
						}
					}
				},
				{
					selector: {
						value: ".issues-reset-query",
						node: 2
					},
					text: {
						replace: {
							value: "現在の検索条件とフィルタ・ソートを解除"
						}
					}
				},
				{
					selector: {
						value: "nav[aria-label='Issue'] a:nth-child(1)",
						node: 2,
					},
					text: {
						replace: {
							value: "ラベル"
						}
					}
				},
				{
					selector: {
						value: "nav[aria-label='Issue'] a:nth-child(2)",
						node: 2,
					},
					text: {
						replace: {
							value: "マイルストーン"
						}
					}
				},
				{
					selector: {
						value: "a[href$='/issues/new/choose']",
					},
					text: {
						replace: {
							value: "起票"
						}
					}
				},
				{
					selector: {
						value: "details summary[role='button']",
						all: true
					},
					text: {
						matches: [
							{
								pattern: "New issue",
								replace: {
									value: "起票"
								}
							},
						]
					}
				},
				// フィルター Open/Close
				{
					selector: {
						value: "#js-issues-toolbar .table-list-filters .table-list-header-toggle:nth-child(1) a",
						all: true,
						node: webpage.TextNode.FirstOccurrence,
					},
					text: {
						matches: [
							{
								mode: "regex",
								pattern: /(?<COUNT>[0-9]+)\s+Open/.source,
								replace: {
									value: "未解決: $<COUNT>"
								}
							},
							{
								mode: "regex",
								pattern: /(?<COUNT>[0-9]+)\s+Closed/.source,
								replace: {
									value: "終了済: $<COUNT>"
								}
							}
						],
					}
				},
				// フィルタ チェック処理
				{
					selector: {
						value: "#js-issues-toolbar .table-list-triage span.color-fg-muted",
						node: 2
					},
					text: {
						replace: {
							value: "個 選択中"
						}
					}
				},
				// フィルタ: 絞り込み
				{
					selector: {
						value: "#js-issues-toolbar .table-list-filters .table-list-header-toggle:nth-child(2) details summary",
						all: true,
						node: webpage.TextNode.FirstOccurrence,
					},
					text: {
						matches: [
							{
								pattern: "Author",
								replace: {
									value: "起票者",
								}
							},
							{
								pattern: "Label",
								replace: {
									value: "ラベル",
								}
							},
							{
								pattern: "Projects",
								replace: {
									value: "プロジェクト",
								}
							},
							{
								pattern: "Milestones",
								replace: {
									value: "マイルストーン",
								}
							},
							{
								pattern: "Assignee",
								replace: {
									value: "担当者",
								}
							},
							{
								pattern: "Sort",
								replace: {
									value: "ソート",
								}
							},
						],
					}
				},
				// フィルタ: 選択中の適用
				{
					selector: {
						value: "#js-issues-toolbar .table-list-triage .table-list-header-toggle details summary",
						all: true,
						node: webpage.TextNode.FirstOccurrence,
					},
					text: {
						matches: [
							{
								pattern: "Mark as",
								replace: {
									value: "変更",
								}
							},
							{
								pattern: "Label",
								replace: {
									value: "ラベル",
								}
							},
							{
								pattern: "Milestone",
								replace: {
									value: "マイルストーン",
								}
							},
							{
								pattern: "Assign",
								replace: {
									value: "担当者",
								}
							},
						],
					}
				},
				// フィルタ: 選択中の適用 プロジェクト（こいつだけよく分からん）
				{
					selector: {
						value: "#js-issues-toolbar .table-list-triage .table-list-header-toggle details summary span",
						all: true,
					},
					text: {
						matches: [
							{
								pattern: "Projects",
								replace: {
									value: "プロジェクト",
								}
							},
						],
					}
				},
				{
					selector: {
						value: "#js-issues-toolbar summary + .SelectMenu .SelectMenu-title",
						all: true
					},
					text: {
						matches: [
							{
								pattern: "Sort by",
								replace: {
									value: "並び替え"
								}
							},
							{
								// 正規表現使えば XX で絞り込み には出来るけどしんどい
								pattern: "Filter by",
								replace: {
									value: "絞り込み"
								}
							}
						],
					}
				},
				{
					selector: {
						value: "#author-filter-field"
					},
					attributes: {
						"placeholder": {
							replace: {
								value: "起票者"
							}
						}
					}
				},
				{
					selector: {
						value: "#label-filter-field"
					},
					attributes: {
						"placeholder": {
							replace: {
								value: "ラベル"
							}
						}
					}
				},
				{
					selector: {
						value: "#label-select-menu details-menu .SelectMenu-item strong"
					},
					text: {
						replace: {
							value: "未設定"
						}
					}
				},
				{
					selector: {
						value: "project-picker input"
					},
					attributes: {
						"placeholder": {
							replace: {
								value: "プロジェクト"
							}
						}
					}
				},
				{
					selector: {
						value: "#milestones-filter-field"
					},
					attributes: {
						"placeholder": {
							replace: {
								value: "マイルストーン"
							}
						}
					}
				},
				{
					selector: {
						value: "#milestones-select-menu details-menu .SelectMenu-item strong"
					},
					text: {
						replace: {
							value: "未設定"
						}
					}
				},
				{
					selector: {
						value: "#assigns-filter-field"
					},
					attributes: {
						"placeholder": {
							replace: {
								value: "担当者"
							}
						}
					}
				},
				{
					selector: {
						value: "#assignees-select-menu details-menu .SelectMenu-item strong"
					},
					text: {
						replace: {
							value: "未設定"
						}
					}
				},
				// ソート
				{
					selector: {
						value: "#sort-select-menu details-menu .SelectMenu-item span",
						all: true,
					},
					text: {
						matches: [
							{
								pattern: "Newest",
								replace: {
									value: "新しい順"
								}
							},
							{
								pattern: "Oldest",
								replace: {
									value: "古い順"
								}
							},
							{
								pattern: "Most commented",
								replace: {
									value: "コメントが多い順"
								}
							},
							{
								pattern: "Least commented",
								replace: {
									value: "直近でコメントされた順"
								}
							},
							{
								pattern: "Recently updated",
								replace: {
									value: "更新された順"
								}
							},
							{
								pattern: "Least recently updated",
								replace: {
									value: "直近で更新された順"
								}
							},
							// {
							// 	pattern: "Best match",
							// 	replace: {
							// 		value: "何に対してベストなのか・・・"
							// 	}
							// },
						]
					}
				},
				{
					selector: {
						value: "#sort-select-menu details-menu .SelectMenu-divider",
					},
					text: {
						replace: {
							value: "リアクション順"
						}
					}
				},
				//#endregion
				//#region 課題作成
				//#endregion
				//#region 課題詳細
				// タイトル編集
				{
					selector: {
						value: ".gh-header-actions button",
						watch: true,
					},
					text: {
						matches: [
							{
								pattern: "Edit",
								replace: {
									value: "編集"
								}
							}
						]
					}
				},
				// タイトル編集保存
				{
					selector: {
						value: ".js-issue-update button",
					},
					text: {
						replace: {
							value: "保存"
						}
					},
					attributes: {
						"data-disable-with": {
							replace: {
								value: "更新中"
							}
						}
					}
				},
				{
					selector: {
						value: ".js-issue-update button:nth-child(2)",
					},
					text: {
						replace: {
							value: "取消"
						}
					},
				},

				// 閉じる
				{
					selector: {
						value: "#partial-new-comment-form-actions button[name='comment_and_close']"
					},
					attributes: {
						'data-comment-text': {
							matches: [
								{
									pattern: "Close Issue",
									replace: {
										mode: "common",
										value: CommonText[CommonText.TEXT_ISSUE_CLOSE]
									}
								},
								{
									pattern: "Close with comment",
									replace: {
										mode: "common",
										value: CommonText[CommonText.TEXT_ISSUE_CLOSE_WITH_COMMENT],
									}
								}
							],
						}
					}
				},
				{
					selector: {
						value: "#partial-new-comment-form-actions button[name='comment_and_close'] span",
					},
					text: {
						matches: [
							{
								pattern: "Close Issue",
								replace: {
									mode: "common",
									value: CommonText[CommonText.TEXT_ISSUE_CLOSE],
								}
							},
							{
								pattern: "Close with comment",
								replace: {
									mode: "common",
									value: CommonText[CommonText.TEXT_ISSUE_CLOSE_WITH_COMMENT],
								}
							},
						],
					},
					attributes: {
						'data-default-action-text': {
							matches: [
								{
									pattern: "Close Issue",
									replace: {
										mode: "common",
										value: CommonText[CommonText.TEXT_ISSUE_CLOSE],
									}
								},
								{
									pattern: "Close with comment",
									replace: {
										mode: "common",
										value: CommonText[CommonText.TEXT_ISSUE_CLOSE_WITH_COMMENT],
									}
								}
							],
						}
					}
				},
				{
					selector: {
						value: "#partial-new-comment-form-actions button[name='comment_and_open'] [data-target='reopen-button.reopened'] span"
					},
					text: {
						replace: {
							mode: "common",
							value: CommonText[CommonText.TEXT_ISSUE_REOPEN_REOPENED],
						}
					}
				},
				{
					selector: {
						value: "#partial-new-comment-form-actions button[name='comment_and_open'] [data-target='reopen-button.notPlanned'] span"
					},
					text: {
						replace: {
							mode: "common",
							value: CommonText[CommonText.TEXT_ISSUE_REOPEN_NOT_PLANNED],
						}
					}
				},
				{
					selector: {
						value: "#partial-new-comment-form-actions button[name='comment_and_open'] [data-target='reopen-button.completed'] span"
					},
					text: {
						replace: {
							mode: "common",
							value: CommonText[CommonText.TEXT_ISSUE_REOPEN_COMPLETED],
						}
					}
				},
				{
					selector: {
						value: "#partial-new-comment-form-actions details .select-menu-item .select-menu-item-text .select-menu-item-heading",
						node: 1,
						all: true,
					},
					text: {
						matches: [
							{
								pattern: "Close as completed",
								replace: {
									mode: "common",
									value: CommonText[CommonText.TEXT_ISSUE_REOPEN_COMPLETED],
								}
							},
							{
								pattern: "Close as not planned",
								replace: {
									mode: "common",
									value: CommonText[CommonText.TEXT_ISSUE_REOPEN_NOT_PLANNED],
								}
							}
						]
					}
				},
				// コメント
				{
					selector: {
						value: "#partial-new-comment-form-actions button.btn-primary[type='submit']"
					},
					text: {
						replace: {
							value: "コメント"
						}
					}
				},
				//#endregion
				//#region ラベル
				{
					selector: {
						value: ".labels-list button.js-details-target-new-label",
						all: true,
					},
					text: {
						replace: {
							value: "ラベル作成"
						}
					}
				},
				//#endregion
				//#region マイルストーン
				{
					selector: {
						value: "a[href$='/milestones/new']",
					},
					text: {
						replace: {
							value: "マイルストーン作成"
						}
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
		}
	};
}

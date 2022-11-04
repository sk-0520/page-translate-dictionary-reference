//import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';
import { CommonQuery } from './github-common-query';
import { CommonText } from './github-common-text';

/**
 * 課題
 */
export default function get(): webpage.PathPair {
	return {
		pattern: /^\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_-]+)\/(issues(\/(\\d+)|(new))?)|(labels)|(milestones)|(pulls)/,
		setting: {
			query: [
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
				// 閉じる・コメント
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
						value: "a[href$='/milestones/new']",
					},
					text: {
						replace: {
							value: "マイルストーン作成"
						}
					}
				},
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

import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
//import { CommonText } from './github-common-text';

export enum CommonQuery {
	QUERY_SEARCH,
	QUERY_LOGIN,
	QUERY_SIGN_UP,
	QUERY_UPDATED,
	QUERY_LABEL_REPOSITORY_STATUS,
	QUERY_RELATIVE_TIME,
	QUERY_REPOSITORY_HEADER_PIN,
	QUERY_REPOSITORY_HEADER_WATCH,
	QUERY_REPOSITORY_HEADER_FORK,
	QUERY_REPOSITORY_HEADER_STAR,
	QUERY_REPOSITORY_HEADER_CODE,
	QUERY_REPOSITORY_HEADER_ISSUES,
	QUERY_REPOSITORY_HEADER_PR,
	QUERY_REPOSITORY_HEADER_ACTIONS,
	QUERY_REPOSITORY_HEADER_PROJECT,
	QUERY_REPOSITORY_HEADER_WIKI,
	QUERY_REPOSITORY_HEADER_SECURITY,
	QUERY_REPOSITORY_HEADER_INSIGHTS,
	QUERY_REPOSITORY_HEADER_SETTING,
}

export const CommonQuerySetting = new Map<CommonQuery, setting.QuerySetting>([
	[CommonQuery.QUERY_SEARCH, {
		selector: {
			value: "header[role='banner'] input[name='q']"
		},
		attributes: {
			"placeholder": {
				replace: {
					value: "GitHubから検索"
				}
			}
		}
	}],
	[CommonQuery.QUERY_LOGIN, {
		selector: {
			value: "header a[href^='/login']"
		},
		text: {
			replace: {
				value: "ログイン"
			}
		}
	}],
	[CommonQuery.QUERY_SIGN_UP, {
		selector: {
			value: "a[href^='/signup']",
			all: true,
		},
		text: {
			replace: {
				value: "サインアップ"
			}
		}

	}],
	[CommonQuery.QUERY_UPDATED, {
		selector: {
			value: ".color-fg-muted",
			node: -1,
			all: true
		},
		text: {
			matches: [
				{
					mode: "perfect",
					pattern: "Updated",
					replace: {
						value: "更新日 ",
					}
				}
			],
		}
	}],
	[CommonQuery.QUERY_LABEL_REPOSITORY_STATUS, {
		selector: {
			value: ".Label.Label--secondary, .Label.Label--attention",
			all: true
		},
		text: {
			matches: [
				{
					mode: "perfect",
					pattern: "Public",
					replace: {
						value: "公開"
					}
				},
				{
					mode: "perfect",
					pattern: "Public archive",
					replace: {
						value: "アーカイブ(公開)"
					}
				},
				{
					mode: "perfect",
					pattern: "Private",
					replace: {
						value: "非公開"
					}
				},
				{
					mode: "perfect",
					pattern: "Private archive",
					replace: {
						value: "アーカイブ(非公開)"
					}
				}
			],
		}
	}],
	[CommonQuery.QUERY_RELATIVE_TIME, {
		selector: {
			value: "relative-time, time-ago",
			all: true
		},
		text: {
			matches: [
				{
					pattern: "now",
					replace: {
						value: "ついさっき"
					}
				},
				{
					mode: "regex",
					pattern: "(?<TIME>\\d) seconds ago",
					replace: {
						value: "$<TIME> 秒間前"
					}
				},
				{
					mode: "regex",
					pattern: "(?<TIME>\\d) minute(s)? ago",
					replace: {
						value: "$<TIME> 分間前"
					}
				},
				{
					mode: "regex",
					pattern: "(?<TIME>\\d) hours ago",
					replace: {
						value: "$<TIME> 時間前"
					}
				},
				{
					pattern: "yesterday",
					replace: {
						value: "昨日"
					}
				},
				{
					mode: "regex",
					pattern: "(?<TIME>\\d) days ago",
					replace: {
						value: "$<TIME> 日前"
					}
				},
				{
					mode: "perfect",
					pattern: "last month",
					replace: {
						value: "先月"
					}
				},
				{
					mode: "regex",
					pattern: "(?<TIME>\\d) months ago",
					replace: {
						value: "$<TIME> ヵ月前"
					}
				},
				{
					mode: "regex",
					pattern: "(?<TIME>\\d) years ago",
					replace: {
						value: "$<TIME> 年前"
					}
				},
			]
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_PIN, {
		selector: {
			mode: "normal",
			value: "form[action$='/profile_pin'] button",
			node: 2
		},
		text: {
			matches: [
				{
					mode: "forward",
					pattern: "Pin",
					replace: {
						value: "固定する"
					}
				},
				{
					mode: "forward",
					pattern: "Unpin",
					replace: {
						value: "固定解除"
					}
				}
			]
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_WATCH, {
		selector: {
			value: ".pagehead-actions li:nth-child(1) a",
			node: 2
		},
		text: {
			matches: [
				{
					pattern: "Notifications",
					replace: {
						value: "通知を受ける"
					}
				}
			],
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_FORK, {
		selector: {
			value: ".pagehead-actions li:nth-child(2) a",
			node: 2
		},
		text: {
			replace: {
				value: "フォーク"
			}
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_STAR, {
		selector: {
			value: ".pagehead-actions li:nth-child(3) a span",
		},
		text: {
			replace: {
				value: "スター"
			}
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_CODE, {
		selector: {
			value: "#code-tab [data-content]"
		},
		text: {
			replace: {
				value: "ソースコード"
			}
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_ISSUES, {
		selector: {
			value: "#issues-tab [data-content]",
			all: true
		},
		text: {
			replace: {
				value: "課題"
			}
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_PR, {
		selector: {
			value: "#pull-requests-tab [data-content]"
		},
		text: {
			replace: {
				value: "プルリクエスト"
			}
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_ACTIONS, {
		selector: {
			value: "#actions-tab [data-content]"
		},
		text: {
			replace: {
				value: "アクション"
			}
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_PROJECT, {
		selector: {
			value: "#projects-tab [data-content]"
		},
		text: {
			replace: {
				value: "プロジェクト"
			}
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_WIKI, {
		selector: {
			value: "#wiki-tab [data-content]"
		},
		text: {
			replace: {
				value: "Wiki"
			}
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_SECURITY, {
		selector: {
			value: "#security-tab [data-content]"
		},
		text: {
			replace: {
				value: "セキュリティ"
			}
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_INSIGHTS, {
		selector: {
			value: "#insights-tab [data-content]"
		},
		text: {
			replace: {
				value: "分析"
			}
		}
	}],
	[CommonQuery.QUERY_REPOSITORY_HEADER_SETTING, {
		selector: {
			value: "#settings-tab [data-content]"
		},
		text: {
			replace: {
				value: "設定"
			}
		}
	}],
]);




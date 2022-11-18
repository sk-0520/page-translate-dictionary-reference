export enum CommonText {
	TEXT_ISSUE_CLOSE,
	TEXT_ISSUE_CLOSE_WITH_COMMENT,
	TEXT_ISSUE_REOPEN_REOPENED,
	TEXT_ISSUE_REOPEN_NOT_PLANNED,
	TEXT_ISSUE_REOPEN_COMPLETED,
}

export const CommonTextSetting = new Map<CommonText, string>([
	[CommonText.TEXT_ISSUE_CLOSE, '閉じる'],
	[CommonText.TEXT_ISSUE_CLOSE_WITH_COMMENT, '追記して閉じる'],
	[CommonText.TEXT_ISSUE_REOPEN_REOPENED, '開きなおす'],
	// 訳が微妙。本題じゃないから閉じた的なことだとは思うけど
	[CommonText.TEXT_ISSUE_REOPEN_NOT_PLANNED, '解決せずに閉じる'],
	[CommonText.TEXT_ISSUE_REOPEN_COMPLETED, '解決して閉じる'],
]);

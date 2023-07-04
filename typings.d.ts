export default class Pastefy {
	private apiKey: string;
	private apiURL: string;

	constructor(apiKey?: string);

	public paste: {
		create: (
			content: string,
			title: string,
			options?: pasteOptions
		) => Promise<pasteResponse>;
		get: (id: string) => Promise<Paste>;
		edit: (
			id: string,
			content: string,
			title: string,
			options?: pasteOptions
		) => Promise<pasteResponse>;
		delete: (id: string) => Promise<pasteResponse>;
	};

	public folder: {
		create: (name: string) => Promise<folderResponse>;
		get: (id: string) => Promise<Folder>;
		edit: (id: string, name: string) => Promise<folderResponse>;
		delete: (id: string) => Promise<folderResponse>;
	};
}

export interface pasteOptions {
	type?: "PASTE" | "MULTIPASTE";
	visibility?: "UNLISTED" | "PUBLIC" | "PRIVATE";
	encrypted?: boolean;
	expire_at?: string;
}

export interface pasteResponse {
	success: boolean;
	paste: string;
}

export interface folderResponse {
	success: boolean;
	folder: string;
}

export interface Paste {
	id: string;
	type: "PASTE" | "MULTIPASTE";
	title: string;
	content: string;
	encrypted: boolean;
	exists: boolean;
	raw_url: string;
	created_at: string;
	expire_at: string;
	user_id: string;
}

export interface Folder {
	id: string;
	name: string;
	user_id: string;
	children: string[];
	exists: boolean;
	pastes: Paste[];
	created_at: string;
}

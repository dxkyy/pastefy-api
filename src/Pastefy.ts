import axios from "axios";
import {
	Paste,
	Folder,
	pasteOptions,
	pasteResponse,
	folderResponse,
} from "../typings";

class Pastefy {
	private apiKey: string | undefined;
	private apiURL: string = "https://pastefy.app/api/v2";

	constructor(apiKey?: string) {
		this.apiKey = apiKey;
	}

	public paste = {
		create: async (
			content: string,
			title: string,
			options?: pasteOptions
		): Promise<pasteResponse> => {
			const response = await axios.post(
				`${this.apiURL}/paste`,
				{
					type: "PASTE",
					title: title,
					content: content,
					visibility: options?.visibility,
					encrypted: options?.encrypted,
					expire_at: options?.expire_at,
				},
				{
					headers: {
						Authorization: "Bearer " + this.apiKey,
						Accept: "application/json",
						Content_Type: "application/json",
					},
				}
			);

			if (response.data.success === false)
				throw new Error(`Error: ${response.data.error}`);

			return response.data as pasteResponse;
		},

		get: async (id: string): Promise<Paste> => {
			const response = await axios.get(`${this.apiURL}/paste/${id}`, {
				headers: {
					Authorization: "Bearer " + this.apiKey,
					Accept: "application/json",
					Content_Type: "application/json",
				},
			});

			if (response.data.success === false)
				throw new Error(`Error: ${response.data.error}`);

			return response.data as Paste;
		},

		edit: async (
			id: string,
			content: string,
			title: string,
			options?: pasteOptions
		): Promise<pasteResponse> => {
			if (!this.apiKey) throw new Error("No API key provided");
			const response = await axios.put(
				`${this.apiURL}/paste/${id}`,
				{
					type: options?.type,
					title: title,
					content: content,
					visibility: options?.visibility,
					encrypted: options?.encrypted,
					expire_at: options?.expire_at,
				},
				{
					headers: {
						Authorization: "Bearer " + this.apiKey,
						Accept: "application/json",
						Content_Type: "application/json",
					},
				}
			);

			if (response.data.success === false)
				throw new Error(`Error: ${response.data.error}`);

			return response.data as pasteResponse;
		},

		delete: async (id: string): Promise<pasteResponse> => {
			if (!this.apiKey) throw new Error("No API key provided");
			const response = await axios.delete(`${this.apiURL}/paste/${id}`, {
				headers: {
					Authorization: "Bearer " + this.apiKey,
					Accept: "application/json",
					Content_Type: "application/json",
				},
			});

			if (response.data.success === false)
				throw new Error(`Error: ${response.data.error}`);

			return response.data as pasteResponse;
		},
	};

	public folder = {
		create: async (name: string): Promise<folderResponse> => {
			const response = await axios.post(
				`${this.apiURL}/folder`,
				{
					name,
				},
				{
					headers: {
						Authorization: "Bearer " + this.apiKey,
						Accept: "application/json",
						Content_Type: "application/json",
					},
				}
			);

			if (response.data.success === false)
				throw new Error(`Error: ${response.data.error}`);

			return response.data as folderResponse;
		},

		get: async (id: string): Promise<Folder> => {
			const response = await axios.get(`${this.apiURL}/folder/${id}`, {
				headers: {
					Authorization: "Bearer " + this.apiKey,
					Accept: "application/json",
					Content_Type: "application/json",
				},
			});

			if (response.data.success === false)
				throw new Error(`Error: ${response.data.error}`);

			return response.data as Folder;
		},

		edit: async (id: string, name: string): Promise<folderResponse> => {
			const response = await axios.put(
				`${this.apiURL}/folder/${id}`,
				{
					name: name,
				},
				{
					headers: {
						Authorization: "Bearer " + this.apiKey,
						Accept: "application/json",
						Content_Type: "application/json",
					},
				}
			);

			if (response.data.success === false)
				throw new Error(`Error: ${response.data.error}`);

			return response.data as folderResponse;
		},

		delete: async (id: string): Promise<folderResponse> => {
			if (!this.apiKey) throw new Error("No API key provided");
			const response = await axios.delete(`${this.apiURL}/folder/${id}`, {
				headers: {
					authorization: "Bearer " + this.apiKey,
					accept: "application/json",
					content_type: "application/json",
				},
			});

			if (response.data.success === false)
				throw new Error(`Error: ${response.data.error}`);

			return response.data as folderResponse;
		},
	};
}

export default Pastefy;

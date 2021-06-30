export interface searchResultInterface {
	id: number;
	readable: boolean;
	title: string;
	title_short: string;
	title_version: string | "";
	link: string | "";
	duration: number;
	rank: number;
	explicit_lyrics: boolean;
	explicit_content_lyrics: number;
	explicit_content_cover: number;
	preview: string;
	md5_image: string;
	type: string;
	artist: {
		id: number;
		name: string;
		link: string;
		picture: string;
		picture_small: string;
		picture_medium: string;
		picture_big: string;
		picture_xl: string;
		tracklist: string;
		type: string;
	};
	album: {
		id: number;
		name: string;
		link: string;
		cover: string;
		cover_small: string;
		cover_medium: string;
		cover_big: string;
		cover_xl: string;
		tracklist: string;
		type: string;
		md5_image: string;
	};
}

 interface Artist {
	id: number;
	name: string;
	link: string;
	picture: string;
	picture_small: string;
	picture_medium: string;
	picture_big: string;
	picture_xl: string;
	tracklist: string;
	type: string;
}

 interface Album {
	id: number;
	name: string;
	link: string;
	cover: string;
	cover_small: string;
	cover_medium: string;
	cover_big: string;
	cover_xl: string;
	tracklist: string;
	type: string;
	md5_image: string;
}

 interface Track {
	id: number;
	readable: boolean;
	title: string;
	title_short: string;
	title_version: string;
	link: string;
	duration: number;
	rank: number;
	explicit_lyrics: boolean;
	explicit_content_lyrics: number;
	explicit_content_cover: number;
	preview: string;
	md5_image: string;
	type: string;
	artist: Artist;
	album: Album;
}

export interface searchResultData {
	data: Track[];
}

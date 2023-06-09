// Generated by https://quicktype.io

export interface BibleData {
    query:        string;
    canonical:    string;
    parsed:       Array<number[]>;
    passage_meta: PassageMeta[];
    passages:     string[];
}


export interface Passages{passages:string[]}

// Generated by https://quicktype.io

export interface YoutubeData {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    items:         Item[];
    pageInfo:      PageInfo;
}

export interface Item {
    kind:    ItemKind;
    etag:    string;
    id:      string;
    snippet: Snippet;
}

export enum ItemKind {
    YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Snippet {
    snippet(snippet: any): unknown;
    publishedAt:            string;
    channelId:              ChannelID;
    title:                  string;
    description:            string;
    thumbnails:             Thumbnails;
    channelTitle:           ChannelTitle;
    playlistId:             PlaylistID;
    position:               number;
    resourceId:             ResourceID;
    videoOwnerChannelTitle: ChannelTitle;
    videoOwnerChannelId:    ChannelID;
}

export enum ChannelID {
    UCkQO3QsgTpNTsOw6UjimT5Q = "UCkQO3QsgTpNTsOw6ujimT5Q",
}

export enum ChannelTitle {
    BeAmazed = "BE AMAZED",
}

export enum PlaylistID {
    UUkQO3QsgTpNTsOw6UjimT5Q = "UUkQO3QsgTpNTsOw6ujimT5Q",
}

export interface ResourceID {
    kind:    ResourceIDKind;
    videoId: string;
}

export enum ResourceIDKind {
    YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
    default:  Default;
    medium:   Default;
    high:     Default;
    standard: Default;
    maxres:   Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}

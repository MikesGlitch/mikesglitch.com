export interface IYouTubeVideo {
  id: string;
  publishedAt: Date;
  thumbnail: string;
  title: string;
  description: string;
  iframeEmbedUrl: string;
}

export interface IGetYoutubeVideosResponse {
  latestVideoEmbedIframeUrl: string;
  latestVideos: IYouTubeVideo[];
}

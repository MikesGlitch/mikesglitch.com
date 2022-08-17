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

export interface IProject {
  id: string;
  name: string;
  description: string;
  stars: number;
  url: string;
  lastComittedAt: string;
}

export interface IGetProjectsResponse {
  projects: IProject[];
}

export interface IGetLastDeploymentResponse {
  lastDeployedAt: string;
  commitSha: string;
}

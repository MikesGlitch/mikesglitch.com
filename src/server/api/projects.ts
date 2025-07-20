import { Client } from "memjs";
import type { IGetProjectsResponse, IProject } from "~/interfaces/Api";

const CACHE_KEY = "projects";

export default defineEventHandler(async () => {
  // take request params for which projects to get?
  const config = useRuntimeConfig();
  const getReposUrl = "https://api.github.com/users/MikesGlitch/repos";
  const basicAuthToken = Buffer.from(
    `mikesglitch:${config.githubPat}`
  ).toString("base64");

  try {
    const cacheClient = Client.create(config.memcachierServers, {
      password: config.memcachePassword,
      username: config.memcacheUsername,
    });
    await cacheClient.get(CACHE_KEY).catch(() => null);

    // if (cachedProjects?.value) {
    //   console.log("cache hit - returning github project cache");
    //   return JSON.parse(cachedProjects.value.toString());
    // }

    const githubProjectsResponse = await $fetch<any[]>(getReposUrl, {
      headers: {
        authorization: `basic ${basicAuthToken}`,
      },
    });

    const excludeRepos = ["MikesGlitch/MikesGlitch"];

    const actualBudgetProjects: IProject[] = [];
    const actualRepo = await $fetch<any>(
      "https://api.github.com/repos/actualbudget/actual",
      {
        headers: {
          authorization: `basic ${basicAuthToken}`,
        },
      }
    );

    actualBudgetProjects.push({
      id: actualRepo.id,
      name: actualRepo.name,
      description: actualRepo.description,
      stars: actualRepo.stargazers_count,
      url: actualRepo.html_url,
      lastComittedAt: actualRepo.pushed_at,
    });

    const actualDocs = await $fetch<any>(
      "https://api.github.com/repos/actualbudget/docs",
      {
        headers: {
          authorization: `basic ${basicAuthToken}`,
        },
      }
    );

    actualBudgetProjects.push({
      id: actualDocs.id,
      name: actualDocs.name,
      description: actualDocs.description,
      stars: actualDocs.stargazers_count,
      url: actualDocs.html_url,
      lastComittedAt: actualDocs.pushed_at,
    });

    const actualServer = await $fetch<any>(
      "https://api.github.com/repos/actualbudget/actual-server",
      {
        headers: {
          authorization: `basic ${basicAuthToken}`,
        },
      }
    );

    actualBudgetProjects.push({
      id: actualServer.id,
      name: actualServer.name,
      description: actualServer.description,
      stars: actualServer.stargazers_count,
      url: actualServer.html_url,
      lastComittedAt: actualServer.pushed_at,
    });

    const filteredProjects = githubProjectsResponse.filter(
      (projectItem) =>
        !projectItem.fork &&
        !projectItem.archived &&
        !excludeRepos.includes(projectItem.full_name)
    );

    const regularProjects: IProject[] = filteredProjects.map(
      (project): IProject => {
        return {
          id: project.id,
          name: project.name,
          description: project.description,
          stars: project.stargazers_count,
          url: project.html_url,
          lastComittedAt: project.pushed_at,
        };
      }
    );

    // Combine projects with ActualBudget projects at the top
    const allProjects = [...actualBudgetProjects, ...regularProjects];

    const response: IGetProjectsResponse = {
      projects: allProjects,
    };

    const responseContent = JSON.stringify(response);
    await cacheClient
      .set(CACHE_KEY, responseContent, { expires: 3600 })
      .catch((err) => err); // 1 hour

    return response;
  } catch (error) {
    return createError({
      statusCode: 500,
      data: "Unable to call the github api",
    });
  }
});

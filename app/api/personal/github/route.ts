import { getGithubUser } from "@/app/services/github";

export async function GET(req: Request) {
  const response = await getGithubUser("personal");

  return new Response(response.data, {
    status: response.status,
  });
}

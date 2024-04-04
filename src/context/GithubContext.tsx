import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

//  -== SETTING_CONFIG ==-  ||
const GITHUB_USER = "PKief"
const GITHUB_REPO = "vscode-material-icon-theme"
// --------------------------\\

type User = {
  id: number
  login: string
  name: string
  bio: string | null
  company: string | null
  avatar_url: string
  email: string | null
  followers: number
  following: number
  html_url: string
};

type Issues = {
  body: string
  title: string
  updated_at: Date
  created_at: Date
  number: number
};


interface GithubContextData {
  user: User
  issues: Issues[]
  // searchPosts: (query: string) => void
}

export const GithubContext = createContext<GithubContextData>(
  {} as GithubContextData
);

interface GithubContextProviderData {
  children: ReactNode;
}

export function GithubContextProvider({ children }: GithubContextProviderData) {
  const [user, setUser] = useState<User>({} as User);
  const [issues, setIssues] = useState<Issues[]>([] as Issues[]);

  async function getUser(username: string) {
    try {
      const response = await api.get<User>(`users/${username}`);

      const {
        id,
        login,
        name,
        bio,
        company,
        avatar_url,
        email,
        followers,
        following,
        html_url,
      } = response.data;

      setUser({
        id,
        login,
        name,
        bio,
        company,
        avatar_url,
        email,
        followers,
        following,
        html_url,
      });
    } catch (error) {
      alert(`Erro ao obter dados do usuário: ${username}!`);
      console.error(`Erro ao obter dados do usuário: ${username}!`, error);
    }
  }

  async function getPosts(usename: string, repository: string, query: string) {
    try {
      const response = await api.get(
        `search/issues?q=${query}%20repo:${usename}/${repository}`
      );

      setIssues(response.data.items);

    } catch (error) {
      alert(`Erro ao obter issues do repositório: ${repository}!`);
      console.error(`Erro ao obter issues do repositório: ${repository}!`, error);
    }
  }
  
  useEffect(() => {
    getUser(GITHUB_USER);
    getPosts(GITHUB_USER, GITHUB_REPO, '')
  }, []);

  return (
    <GithubContext.Provider value={{ user, issues }}>
      {children}
    </GithubContext.Provider>
  );
}

import { Meta, Pagination } from './giphy'

export type Request = {
  url: string
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
  params?: any
}

export type Response<T = unknown> = {
  data?: T
  meta?: Meta
  pagination?: Pagination
}

export const API_PREFIX = import.meta.env.VITE_GIPHY_API_URL ?? ``

export async function request<T extends Response>({
  url,
  method,
  params
}: Request) {
  const query = queryToString(params as Record<string, string>)
  const response = await fetch(`${API_PREFIX}${url}${query}`, {
    method
  })

  const answer: T = await response.json()

  if (response.ok) {
    return answer
  } else {
    throw answer
  }
}

export function queryToString(
  query: Record<string, string> | undefined
): string {
  const apiKey = `api_key=${import.meta.env.VITE_GIPHY_API_KEY}`
  return query
    ? `?${new URLSearchParams(query).toString()}&${apiKey}`
    : `?${apiKey}`
}

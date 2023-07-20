type UseFetch = typeof useFetch

type UseLazyFetch = typeof useLazyFetch 

/**
 * 从后端直接请求
 * @example
 * ```ts
 * // 一定会阻塞导航
 * const { data } = await useServiceRequest("/api/foo")
 * ``` 
 */
export const useServiceRequest: UseFetch = (...rest) => {
  return useFetch(...rest)
}

/**
 * 从前端请求
 * @example
 * ```ts
 * // 一定不会阻塞导航
 * const { data } = await useClentRequest("/api/foo")
 * ```
 */
export const useClentRequest: UseLazyFetch = (...rest) => {
  const [url, options, ...otherRest] = rest
  return useLazyFetch(url, {
    ...options,
    server: false
  }, ...otherRest)
}
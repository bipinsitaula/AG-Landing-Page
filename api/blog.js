import { GetRequest, PatchRequest, PostRequest } from "@/plugins/https";

export const APIGetAllBlogs = (page, limit) => GetRequest(`/blogs/all?page=${page}&limit=${limit}`)
export const APIGetBlogDetails = (id) => GetRequest(`/blogs/detail/${id}`)
export const APIAddBlogs = (data) => PostRequest("/blogs/add", data)
export const APIGetAllBlogsPaginated = (page = 1, limit = 10) => GetRequest(`/blogs/paginated?page=${page}&limit=${limit}`)
export const APIUpdateBlogs = (id, data) => PatchRequest(`/blogs/update/${id}`, data)

export const APIGetAllBlogCategory = () => GetRequest("/blog-category/all")
export const APIGetActiveBlogCategory = () => GetRequest("/blog-category/active/all")
export const APIGetBlogByCategory = (id) => GetRequest(`/blog-category/details/${id}`)
export const APIAddBlogCategory = (data) => PostRequest("/blog-category/category", data)
export const APIUpdateBlogCategory = (id, data) => PatchRequest(`/blog-category/update/${id}`, data)

import { GetRequest, PatchRequest, PostRequest } from "@/plugins/https";

export const APIAddOffers = (data) => PostRequest("/offers", data);
export const APIGetAllOffers = (page, limit) =>
  GetRequest(`/offers?page=${page}&limit=${limit}`);
export const APIUpdateOffers = (id, data) => PatchRequest(`/offers/${id}`, data);
export const APIGetOffersDetails = (id) => GetRequest(`/offers/${id}`);
export const APIGetALlActiveOffers = (page, limit) =>
  GetRequest(`/offers/active?page=${page}&limit=${limit}`);

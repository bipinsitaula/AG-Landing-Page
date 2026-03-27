import { GetRequest, PostRequest } from "../plugins/https";

export const APISendPartnerRequest = (data) =>
  PostRequest("/partner-request", data);

export const APIAllPartnerRequests = (page = 1, limit = 10) =>
  GetRequest(`/partner-request?page=${page}&limit=${limit}`);

export const APIGetPartnerRequestsDetails = (id) =>
  GetRequest(`/partner-request/${id}`);

export const APIGetOperationUsers = () =>
  GetRequest(`/user/all/operation-users`);

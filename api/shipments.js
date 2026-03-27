import { GetRequest, PostRequest } from "@/plugins/https";

/**
 * Fetches comprehensive data for a given tracking number.
 * Includes internal status history and external carrier tracking events.
 * @param {string} searchTerm - The tracking number/ID.
 */
export const APIGetShipment = (searchTerm) =>
  GetRequest(`/shipment/tracking/${searchTerm}`);

/**
 * Gets the current simple status of a shipment.
 * @param {string} id - The shipment ID.
 */
export const APIGetShipmentStatus = (id) =>
  GetRequest(`/shipment/status/${id}`);

/**
 * Used by administrators to update a shipment's progress.
 * @param {object} data - The status update payload.
 */
export const APIPostNewShipmentStatus = (data) =>
  PostRequest("/shipment/status/update", data);

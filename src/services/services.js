import axios from "axios";
import { baseUrl } from "../axios/base";

export const loginCeo = async (data) => {
  const res = await axios({
    method: "POST",
    url: `${baseUrl}/administrator/login/ceo`,
    headers: {
      accept: "application/json",
    },
    data: data,
  });
  return res;
};

export const loginMarketer = async (data) => {
  const res = await axios({
    method: "POST",
    url: `${baseUrl}/administrator/login/mkt`,
    headers: {
      accept: "application/json",
    },
    data: data,
  });
  return res;
};

export const loginGrowthLead = async (data) => {
  const res = await axios({
    method: "POST",
    url: `${baseUrl}/administrator/login/gl`,
    headers: {
      accept: "application/json",
    },
    data: data,
  });
  return res;
};

export const adminDashboard = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/admin/auth/spaceet/aggregatelistings`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getHostAccounts = async () => {
  const res = await axios({
    method: "GET",
    url: `${baseUrl}/admin/auth/spaceet/host`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res;
};

export const getUserAccounts = async () => {
  const res = await axios({
    method: "GET",
    url: `${baseUrl}/admin/auth/spaceet/host`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res;
};

export const getHouseInfo = async (id) => {
  const res = await axios({
    method: "GET",
    url: `${baseUrl}/admin/auth/listing/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getHouseImages = async (id) => {
  const res = await axios({
    method: "GET",
    url: `${baseUrl}/host/get-single-house-pics/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getAllListings = async () => {
  const res = await axios({
    method: "GET",
    url: `${baseUrl}/admin/auth/spaceet/listings`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${localStorage.getItem("token")}`,
    },
  });
  return res;
};

export const searchAllListings = async (name) => {
  const res = await axios({
    method: "GET",
    url: `${baseUrl}/admin/search/${name}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${localStorage.getItem("token")}`,
    },
  });
  return res;
};

export const getAllBookings = async () => {
  const res = await axios({
    method: "GET",
    url: `${baseUrl}/admin/auth/spaceet/bookings`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${localStorage.getItem("token")}`,
    },
  });
  return res;
};

export const getAllHostSettlements = async () => {
  const res = await axios({
    method: "GET",
    url: `${baseUrl}/admin/auth/host-bookings`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${localStorage.getItem("token")}`,
    },
  });
  return res;
};

export const getSingleHostSettlements = async (id) => {
  const res = await axios({
    method: "GET",
    url: `${baseUrl}/admin/auth/host-bookings-settlementinfo/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${localStorage.getItem("token")}`,
    },
  });
  return res;
};

export const approveListing = async (id) => {
  const res = await axios({
    method: "PUT",
    url: `${baseUrl}/admin/auth/approve-listing/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${localStorage.getItem("token")}`,
    },
    data: { status: "Approved" },
  });
  return res;
};

export const declineListing = async (id) => {
  const res = await axios({
    method: "PUT",
    url: `${baseUrl}/admin/auth/decline-listing/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${localStorage.getItem("token")}`,
    },
    data: { status: "Declined" },
  });
  return res;
};

export const formatMoney = (n) => {
  return n?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export const payAHost = async (id, bookingId) => {
  const res = await axios({
    method: "PUT",
    url: `${baseUrl}/admin/pay-a-host/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${localStorage.getItem("token")}`,
    },
    data: bookingId,
  });
  return res;
};

export const sendEmail = async (data) => {
  const res = await axios({
    method: "POST",
    url: `${baseUrl}/admin/auth/send-multiple-mails`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${localStorage.getItem("token")}`,
    },
    data: data,
  });
  return res;
};

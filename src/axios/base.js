export const baseUrl = `
${
  process.env.NODE_ENV === "development"
    ? "http://192.168.0.121:3000"
    : "https://api.spaceet.com"
}`;

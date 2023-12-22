import axios from "axios";

export const DynamicAxios = async (
  url: string,
  method = "GET",
  formData = {},
  headers = {}
) => {
  try {
    const axiosConfig = {
      method: method.toLowerCase(),
      url: url,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      data: JSON.stringify(formData),
    };

    const response = await axios(axiosConfig);

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.response.data.message);
    console.error("Error in Axios request:", error);
    throw new Error(error.response.data.message);
  }
};

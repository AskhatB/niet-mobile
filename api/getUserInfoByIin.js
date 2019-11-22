import request from '../configs/freedomFinanceApi';

export default async (phone, iin) => {
  try {
    const response = await request.post('get-client-data-by-iin', `iin=${iin}`, {
      headers: { 'Api-client-phone': phone }
    });
    console.log("user info -> ", response);
    return response;
  } catch (error) {
    return error;
  }
};

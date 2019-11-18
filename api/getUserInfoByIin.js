import request from '../configs/freedomFinanceApi';

export default async (phone, iin) => {
  try {
    const response = request.post('get-client-data-by-iin', `iin=${iin}`, {
      headers: { 'Api-client-phone': phone }
    });
    return response;
  } catch (error) {
    return error;
  }
};

import request from '../configs/nietServerApi';

export default async (iin, additionalIin) => {
  try {
    const response = await request.post('/userInfo/additional', {
      iin,
      additionalIin
    });
    return response;
  } catch (error) {
    throw error;
  }
};

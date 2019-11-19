import request from '../configs/nietServerApi';

export default async data => {
  try {
    const response = await request.post('/userBid/create', {
      fio: data.fioAndClass,
      iin: data.iin,
      carNumber: data.carNumber,
      phone: data.phone,
      carModel: data.carModel
    });
    return response;
  } catch (error) {
    throw error;
  }
};

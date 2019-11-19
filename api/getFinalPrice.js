import request from '../configs/freedomFinanceApi';

export default async iin => {
  try {
    const response = request.post(
      'set-cost-polis-data',
      `data=[]&cost=&actions=[1]`,
      {
        headers: { 'Api-iin': iin }
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

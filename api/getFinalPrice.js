import request from '../configs/freedomFinanceApi';

export default async iin => {
  try {
    const response = await request.post(
      'set-cost-polis-data',
      `data=[]&cost=&actions=[1]`,
      {
        headers: { 'Api-iin': iin }
      }
    );
    console.log("final price -> ", response);
    return response;
  } catch (error) {
    return error;
  }
};

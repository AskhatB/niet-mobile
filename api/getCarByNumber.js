import qs from 'qs';
import request from '../configs/freedomFinanceApi';

export default async carNumber => {
  const carNumberUpperCaseFormat = carNumber.toUpperCase();
  try {
    const response = await request.post(
      'search-vehicle',
      qs.stringify({ type: 2, word: carNumberUpperCaseFormat })
    );
    return response;
  } catch (error) {
    return error;
  }
};

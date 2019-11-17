import request from '../configs/freedomFinanceApi';

export default async (phone, iin) => {
  request
    .post('get-client-data-by-iin', `iin=${iin}`, {
      headers: { 'Api-client-phone': phone }
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

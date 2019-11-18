import getCarByNumberApi from '../api/getCarByNumber';

export default async carNumber => {
  try {
    const carInfo = await getCarByNumberApi(carNumber);
    if (typeof carInfo.data === 'string') {
      throw 'Неверный формат или номер не существует';
    } else {
      const { MARK, MODEL, NYEAR } = carInfo.data.data.Vehicle;
      return `${MARK} ${MODEL} ${NYEAR}`;
    }
  } catch (error) {
    throw error;
  }
};

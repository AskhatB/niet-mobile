import getCarByNumberApi from '../api/getCar';

export default async carNumber => {
  try {
    const carInfo = await getCarByNumberApi(carNumber, 2);
    if (typeof carInfo.data === 'string' || carInfo.data.warning) {
      throw 'Неверный формат или номер не существует';
    } else {
      const { MARK, MODEL, NYEAR, REGION_ID, VIN } = carInfo.data.data.Vehicle;
      return {
        model: `${MARK} ${MODEL} ${NYEAR}`,
        region: REGION_ID,
        vin: VIN
      };
    }
  } catch (error) {
    throw error;
  }
};

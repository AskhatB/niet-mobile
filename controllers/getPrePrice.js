import getPrePriceApi from '../api/getPrePrice';

export default async (
  carNumber,
  carModel,
  carMark,
  carYear,
  region,
  vin,
  iin
) => {
  try {
    const priceData = await getPrePriceApi(
      carNumber,
      carModel,
      carMark,
      carYear,
      region,
      vin,
      iin
    );
    return {
      success: priceData.success
    };
  } catch (error) {
    throw error;
  }
};

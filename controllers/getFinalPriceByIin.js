import getFinalPrice from '../api/getFinalPrice';

export default async iin => {
  try {
    const priceData = await getFinalPrice(iin);
    return {
      price: priceData.data.cost,
      discountPrice: priceData.data.cost_with_discount
    };
  } catch (error) {
    throw error;
  }
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event: any) => {
     const { name, description, price, address, city, state, zip, country, bedrooms, bathrooms, sqft, lotSize, yearBuilt,  propertyType, propertyStatus, propertyImage, featured} = event.body;
    }
  };
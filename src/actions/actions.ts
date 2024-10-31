"use server";
const base_url = process.env.BASE_URL;
export const fetchHomeData = async () => {
  try {
    const response = await fetch(`${base_url}/website/home_front`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start: 0,
        end: 50,
        location_id: 247,
        user_id: 116,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchWebsiteContent = async () => {
  try {
    const response = await fetch(`${base_url}/website/home_front`, {
      next: { revalidate: 10 },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start: 0,
        end: 50,
        location_id: 247,
        user_id: 116,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const { WebsiteContentFind, ...rest } = data;

    return { WebsiteContentFind, data: rest };
  } catch (error) {
    console.error(error);
  }
};
export const fetchProductList = async ({
  slug,
  type,
}: {
  slug: string;
  type: string;
}) => {
  try {
    const response = await fetch(
      `${base_url}/website/categoryfind?cf=${slug}&type=${type}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchFindBrands = async (name: string) => {
  try {
    const response = await fetch(
      `${base_url}/website/brand_find?name=${name}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

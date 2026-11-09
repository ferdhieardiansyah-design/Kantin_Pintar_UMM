export interface FoodRecommendation {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  ingredients: string[];
  prepTimeMinutes: number;
}

interface ApiRecipe {
  id: number;
  name: string;
  image: string;
  rating: number;
  ingredients: string[];
  prepTimeMinutes: number;
}

interface ApiRecipeResponse {
  recipes: ApiRecipe[];
}

function isApiRecipe(value: unknown): value is ApiRecipe {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const recipe = value as Record<string, unknown>;
  return (
    typeof recipe.id === 'number' &&
    typeof recipe.name === 'string' &&
    typeof recipe.image === 'string' &&
    typeof recipe.rating === 'number' &&
    typeof recipe.prepTimeMinutes === 'number' &&
    Array.isArray(recipe.ingredients) &&
    recipe.ingredients.every((ingredient) => typeof ingredient === 'string')
  );
}

function isApiRecipeResponse(value: unknown): value is ApiRecipeResponse {
  if (typeof value !== 'object' || value === null || !('recipes' in value)) {
    return false;
  }

  const recipes = value.recipes;
  return Array.isArray(recipes) && recipes.every(isApiRecipe);
}

async function requestFoodRecommendations(signal: AbortSignal): Promise<FoodRecommendation[]> {
  const response = await fetch(
    'https://dummyjson.com/recipes?limit=6&select=id,name,ingredients,image,rating,prepTimeMinutes',
    { signal }
  );

  if (!response.ok) {
    throw new Error(`Gagal mengambil rekomendasi menu (HTTP ${response.status}).`);
  }

  const data: unknown = await response.json();
  if (!isApiRecipeResponse(data)) {
    throw new Error('Format data rekomendasi menu dari server tidak valid.');
  }

  return data.recipes.map((recipe) => ({
    id: String(recipe.id),
    name: recipe.name,
    imageUrl: recipe.image,
    rating: recipe.rating,
    ingredients: recipe.ingredients,
    prepTimeMinutes: recipe.prepTimeMinutes,
  }));
}

export function fetchFoodRecommendations(signal: AbortSignal): Promise<FoodRecommendation[]> {
  return Promise.resolve()
    .then(() => requestFoodRecommendations(signal))
    .then((recipes) =>
      recipes.length > 0
        ? recipes
        : Promise.reject(new Error('Belum ada rekomendasi menu yang tersedia.'))
    );
}

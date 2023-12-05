import { TSuggestion } from "@/types/suggestion.type";
export interface Suggestion {
  title: string;
  description: string;
  cover: string;
}

export const suggestions = async (): Promise<Suggestion[]> => {
  const url = 'http://localhost:8080/api/voteEase/suggestions';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.map((d: TSuggestion) => ({
      title: d.title,
      description: d.description,
      cover: d.pics,
    }));
  } catch (error) {
    // Handle errors here
    console.error('Fetch error:', error);
    return [];
  }
};
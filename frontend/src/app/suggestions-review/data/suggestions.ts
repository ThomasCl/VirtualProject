import { TVote } from "@/types/vote.type";
export interface Suggestion {
  name: string;
  description: string;
  cover: string;
  amount_of_votes: number;
}

export const suggestions = async (): Promise<Suggestion[]> => {
  const url = 'http://localhost:8080/api/voteEase/votes/voteable/false';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.map((d: TVote) => ({
      name: d.name,
      description: d.description,
      cover: d.pics,
      amount_of_votes: d.amount_of_votes,
    }));
  } catch (error) {
    // Handle errors here
    console.error('Fetch error:', error);
    return [];
  }
};
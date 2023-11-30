import { TVote } from "@/types/vote.type";
export interface Suggestion {
  name: string;
  description: string;
  cover: string;
  amount_of_votes: number;
}

export const suggestions = async (): Promise<Suggestion[]> => {
  const url = 'http://localhost:8080/api/voteEase/votes/voteable/true';

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

// export const suggestions: Suggestion[] = [
//   {
//     name: "Upgrade Office Chairs",
//     description:
//       "Please upgrade the office chairs to something more comfortable.",
//     cover:
//       "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     name: "Upgrade Office Chairs",
//     description:
//       "Please upgrade the office chairs to something more comfortable.",
//     cover:
//       "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     name: "Upgrade Office Chairs",
//     description:
//       "Please upgrade the office chairs to something more comfortable.",
//     cover:
//       "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     name: "Upgrade Office Chairs",
//     description:
//       "Please upgrade the office chairs to something more comfortable.",
//     cover:
//       "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

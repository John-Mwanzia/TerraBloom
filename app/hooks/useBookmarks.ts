import { useQuery } from "@tanstack/react-query";

const useBookmarks = (options = {}) => {
  return useQuery({
    queryKey: ["userBookmarks"],
    queryFn: async () => {
      const response = await fetch(`/api/bookmark`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    ...options, 
    
  });
};

export default useBookmarks;

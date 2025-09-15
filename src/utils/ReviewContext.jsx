import { createContext, useEffect, useState } from "react";
import { supabase } from "../Database/SupabaseClient";

export const ReviewContext = createContext();

export function ReviewProvider({ children }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("Reviews").select("*");
      if (error) console.error("Error fetching reviews:", error.message);
      else setReviews(data);
      setLoading(false);
    };
    fetchReviews();
  }, []);

  return (
    <ReviewContext.Provider value={{ reviews, loading }}>
      {children}
    </ReviewContext.Provider>
  );
}

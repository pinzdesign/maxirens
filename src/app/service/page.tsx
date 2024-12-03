"use client";

import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import ServicePreview from "../components/ServicesPreview";
import IntroArticle from "../components/IntroArticle";
import CustomerComment from "../components/CustomerComment";
import WorkInfo from "../components/WorkInfo";
import Pricebox from "../components/Pricebox";

// Define the type for a price entry
interface PriceEntry {
  id: number; // assuming an ID column exists in the Supabase table
  title: string;
  price: number;
}

export default function Home() {
  // State for price data and loading
  const [priceData, setPriceData] = useState<PriceEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // TypeScript expects both arguments here: the table name and the type of the data
        const { data, error } = await supabase
          .from("prices")
          .select("*");

        if (error) throw error;

        setPriceData(data || []);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Error fetching prices:", err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrices();
  }, []);

  // Distribute prices into 3 boxes
  const distributePrices = (data: PriceEntry[], numBoxes: number): PriceEntry[][] => {
    const boxes = Array.from({ length: numBoxes }, () => [] as PriceEntry[]);
    data.forEach((item, index) => {
      boxes[index % numBoxes].push(item);
    });
    return boxes;
  };

  const priceBoxes = distributePrices(priceData, 3);

  return (
    <>
      <ServicePreview />
      <IntroArticle
        imagePath="/images/shirts.png"
        imageAlt="tøj"
        imageCircle={true}
        content={[
          {
            title: "Vores Servicer",
            text: "Hos Maxi Rens tilbyder vi en bred vifte af løsninger til dit tøj - alt fra professionel rensning og omhyggelig vask til reparation af dine favoritstykker. Uanset om det handler om at få tøjet til at se ud som nyt, forlænge dets levetid eller bare gøre din hverdag lettere, står vi klar til at hjælpe med ekspertise og omtanke.",
          },
        ]}
      />

      <h2 className="centered">Priser</h2>
      <div className="container">
        <div className="row">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            priceBoxes.map((content, idx) => (
              <Pricebox key={idx} content={content} />
            ))
          )}
        </div>
      </div>

      <CustomerComment />
      <WorkInfo />
    </>
  );
}

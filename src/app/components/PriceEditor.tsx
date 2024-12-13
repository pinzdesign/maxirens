"use client";

import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

interface PriceEntry {
  id: number;
  title: string;
  price: number;
}

export default function PriceEditor() {
  const [priceData, setPriceData] = useState<PriceEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [currentEdit, setCurrentEdit] = useState<PriceEntry | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedPrice, setEditedPrice] = useState(0);
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState(0);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const { data, error } = await supabase.from("prices").select("*");
        if (error) throw error;

        setPriceData(data || []);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("fejl: ", err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrices();
  }, []);

  const handleEdit = (priceItem: PriceEntry) => {
    setCurrentEdit(priceItem);
    setEditedTitle(priceItem.title);
    setEditedPrice(priceItem.price);
    setShowEditModal(true);
  };

  const handleSaveChanges = async () => {
    if (!currentEdit) return;

    try {
      const { error } = await supabase
        .from("prices")
        .update({
          title: editedTitle,
          price: editedPrice,
        })
        .eq("id", currentEdit.id);

      if (error) throw error;

      setPriceData((prevData) =>
        prevData.map((item) =>
          item.id === currentEdit.id
            ? { ...item, title: editedTitle, price: editedPrice }
            : item
        )
      );
      setShowEditModal(false);
      setCurrentEdit(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("fejl:", err.message);
      }
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase.from("prices").delete().eq("id", id);

      if (error) throw error;

      setPriceData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("fejl:", err.message);
      }
    }
  };

  const handleCreateNewPrice = async () => {
    if (!newTitle || newPrice <= 0) return;

    const newPriceEntry: PriceEntry = {
      id: Date.now(),
      title: newTitle,
      price: newPrice,
    };

    setPriceData((prevData) => [...prevData, newPriceEntry]);

    try {
      const { data, error } = await supabase
        .from("prices")
        .insert([
          {
            title: newTitle,
            price: newPrice,
          },
        ])
        .select();

      if (error) {
        console.error("fejl:", error.message);
        setPriceData((prevData) => prevData.filter((item) => item.id !== newPriceEntry.id));
        throw error;
      }

      if (data && data[0] && data[0].id) {
        setPriceData((prevData) =>
          prevData.map((item) =>
            item.id === newPriceEntry.id ? { ...item, id: data[0].id } : item
          )
        );
      }

      setShowCreateModal(false);
      setNewTitle("");
      setNewPrice(0);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("fejl:", err.message);
      }
    }
  };

  return (
    <div className="container pricelist">
      <h2>Pris Liste</h2>
      <p>Her kan du redigere, oprette nye og slette priser, alle priser bliver fordelt i tre spælter på frontsiden.</p>
      <button className="btn btn-success mb-3 btnNewprice" onClick={() => setShowCreateModal(true)}>Ny Pris</button>
      {isLoading ? (
        <p>Henter...</p>
      ) : (
        <>
          {priceData.length > 0 ? (
            priceData.map((priceItem) => (
              <div key={priceItem.id} className="row mb-3 align-items-center">
                <div className="col-md-6">
                  <h5>{priceItem.title}</h5>
                </div>
                <div className="col-md-3">
                  <p>{priceItem.price.toFixed(2)},-</p>
                </div>
                <div className="col-md-3 text-end">
                  <button className="btn btn-primary btnNewprice" onClick={() => handleEdit(priceItem)}>
                    Rediger
                  </button>
                  <button className="btn btn-danger btnCancel" onClick={() => handleDelete(priceItem.id)}>
                    Slet
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Ingen priser fundet.</p>
          )}
        </>
      )}
      {showEditModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Rediger Pris</h5>
                <button type="button" className="btn-close btnCancel" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Pris titlen</label>
                  <input type="text" className="form-control" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input type="number" className="form-control" value={editedPrice} onChange={(e) => setEditedPrice(Number(e.target.value))}/>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary btnCancel" onClick={() => setShowEditModal(false)}>Annuler</button>
                <button type="button" className="btn btn-primary btnNewprice" onClick={handleSaveChanges}>Gem</button>
              </div>
            </div>
          </div>
        </div>
      )}
  
      {showCreateModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Tilføj Ny Pris</h5>
                <button type="button" className="btn-close btnCancel" onClick={() => setShowCreateModal(false)} ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input type="text" className="form-control" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input type="number" className="form-control" value={newPrice} onChange={(e) => setNewPrice(Number(e.target.value))}/>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary btnCancel" onClick={() => setShowCreateModal(false)}>Annuler</button>
                <button type="button" className="btn btn-primary btnNewprice" onClick={handleCreateNewPrice}>Gem</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

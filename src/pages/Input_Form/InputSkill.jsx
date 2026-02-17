import React, { use, useState } from "react";

const InputSkill = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setRating("");
    alert(name, rating);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-6">
      <input
        className={`focus:outline-0 border-b p-4 focus:border-y-amber-400`}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={`focus:outline-0 border-b p-4 focus:border-y-amber-400`}
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button className={`box-button`}>ADD</button>
    </form>
  );
};

export default InputSkill;

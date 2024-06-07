import { useState } from "react";

const NameModal = ({ onNameSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Enter Your Name</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o seu nome"
          />
          <button type="submit">Iniciar</button>
        </form>
      </div>
    </div>
  );
};

export default NameModal;

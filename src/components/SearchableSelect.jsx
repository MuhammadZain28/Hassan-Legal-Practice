import { useState } from "react";

function SearchableSelect({ options, value, onChange }) {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  
  const filteredOptions = (options || []).filter((opt) =>
    (opt || '').toLowerCase().includes((query || '').toLowerCase())
  );

  const handleSelect = (value) => {
    setQuery(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative", width: "100%", display: "flex",}}>
      <input
        type="text"
        value={query}
        placeholder={"Select an option"}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
          onChange(e.target.value); 
        }}
        style={{
            padding: "1rem 0.5rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "100%",
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 500)} 
        
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            width: "60vw",
            maxWidth: "400px",
            top: '260%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderTop: "none",
            maxHeight: "150px",
            overflowY: "auto",
            margin: 0,
            padding: 0,
            listStyle: "none",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {filteredOptions.map((opt, index) => (
            <li
              key={index}
              onClick={() => handleSelect(opt)}
              style={{
                padding: "0.5rem",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SearchableSelect;

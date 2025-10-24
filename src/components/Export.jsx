import { useState } from "react";

const ExportStyle = {
  backgroundColor: '#1173D4',
  color: '#F4F8FB',
  border: 'none',
  borderRadius: '10px',
  padding: '0.8rem 1.8rem',
  margin: 'auto 0',
  fontSize: '1rem',
  fontWeight: '700',
  cursor: 'pointer',
}

export default function Export({onClick}) {
  return (
    <button onClick={onClick} style={ExportStyle}>
      Export as PDF
    </button>
  );
}
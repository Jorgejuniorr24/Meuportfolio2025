// my-portfolio/src/components/ui/card.jsx
import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

// Adicionando o CardTitle
const CardTitle = ({ children }) => {
  return <h2 className="card-title text-xl font-bold">{children}</h2>;
};

// Exportando todos os componentes
export { Card, CardContent, CardHeader, CardTitle };

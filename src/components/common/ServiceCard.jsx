import React from "react";
import { Card } from "./Card";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <Card hover className="flex flex-col items-start h-full">
      <div className="w-12 h-12 mb-4 text-black">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-black-600 mb-4">{description}</p>
    </Card>
  );
};

export default ServiceCard;

import React from "react";
import Image from "next/image";

interface EducationCardProps {
  imageURL: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ imageURL }) => {
  return (
    <div
      style={{
        width: "113px",
        height: "113px",
        backgroundColor: "white",
        borderRadius: "100%",
      }}
    >
      <Image src={imageURL} alt="Image not found" height={113} width={113} />
    </div>
  );
};

export default EducationCard;

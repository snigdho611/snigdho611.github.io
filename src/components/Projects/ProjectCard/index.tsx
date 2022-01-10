import React from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  stacks: string;
  url: string;
}

const index: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  stacks,
  url,
}) => {
  return (
    <div
      style={{
        minWidth: "300px",
        width: "300px",
        height: "200px",
        backgroundColor: "white",
        margin: "10px auto",
        flex: 0.33,
      }}
    >
      {title}
    </div>
  );
};

export default index;

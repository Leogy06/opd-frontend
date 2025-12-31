import React from "react";

interface PageHeaderProps {
  text: string;
  icon?: React.ReactNode;
}

const textStyle = "font-bold text-xl ";
const marginBtm = "mb-4";

export default function PageHeader({ text, icon }: PageHeaderProps) {
  if (!icon) return <h1 className={`${textStyle} ${marginBtm}`}>{text}</h1>;

  return (
    <div className={`${marginBtm} flex items-center gap-1`}>
      <span>{icon}</span> <h1 className={`${textStyle} `}>{text}</h1>
    </div>
  );
}

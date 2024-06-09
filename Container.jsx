import { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapsed() {
    setCollapsed(!collapsed);
  }

  return (
    <div
      className="app"
      style={{
        backgroundColor: "white",
        border: "1px solid red",
        padding: 10,
        color: "black",
      }}
    >
      <div className="app-title" onClick={handleCollapsed}>
        {title}
      </div>
      <div className={!collapsed ? "app-content" : "app-content-hidden"}>
        {children}
      </div>
    </div>
  );
}
export default Container;

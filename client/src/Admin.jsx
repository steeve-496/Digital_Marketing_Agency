import React from "react";
import SiteSettings from "./components/admin/SiteSettings.jsx";
import PageEditor from "./components/admin/PageEditor.jsx";

export default function Admin() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20 }}>Admin Panel</h1>

      <SiteSettings />
      <PageEditor />
    </div>
  );
}

import { useState } from "react";
import Logo from "./Logo";
import Export from "./Export";

const NavStyle = {
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px 10px 20px',
  borderBottom: '2px solid #E4EBF2'
};

export default function Nav() {
	return (
    <div style={NavStyle}>
      <Logo />
      <Export />
    </div>
  );
}
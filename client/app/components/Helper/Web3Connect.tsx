import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { backIn } from "framer-motion";
const Web3Connect = () => {
  return (
    <div className="z-30" style={{ backgroundColor: "transparent" }}>
      <ConnectButton 
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
        showBalance={false}
      />
    </div>
  );
};

export default Web3Connect;

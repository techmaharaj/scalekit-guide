import React from "react";
import Navbar from "@theme-original/Navbar";

export default function NavbarWrapper(props) {
  return (
    <>
      <Navbar {...props} />
      {/* <div class="secondary_nav_container">
        <div>
          <a href="/">Single Sign-on</a>
          <a href="/dir-sync/overview/">Directory Sync</a>
          <a href="/adminportal/overview/">Admin Portal</a>
          <a href="/fba/overview/">Authentication</a>
        </div>
      </div> */}
    </>
  );
}

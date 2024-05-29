import Markdown from "react-markdown";
import IntersectingHeader from "./IntersectingHeader";
import Parameters from "./parameters";
import { useState, useEffect } from "react";
import ListOrganizations from "@site/src/pages/apis/embeds/tag/Organization/get/api/v1/organizations.md";
import GetOrganization from "@site/src/pages/apis/embeds/tag/Organization/get/api/v1/organizations/{id}.md";
import OauthToken from "@site/src/pages/apis/embeds/tag/Authentication/post/oauth/token.md";
import OauthAuthorize from "@site/src/pages/apis/embeds/tag/Authentication/get/oauth/authorize.md";

const data = require("../../openapi/scalekit.swagger.json");
const endpointData = {
  summary: (endpoint, method) => {
    return data["paths"][endpoint][method].summary;
  },
  description: (endpoint, method) => {
    return data["paths"][endpoint][method].description;
  },
  filename: (endpoint, method, tag) => {
    return (
      "@site/src/pages/apis/embeds/tag/" + tag + "/" + method + endpoint + ".md"
    );
  },
};

export function APIEndpoint({ endpoint, method, tag }) {
  return (
    <>
      <IntersectingHeader
        title={endpointData.summary(endpoint, method)}
        id={"tag/" + tag + "/" + method + endpoint}
        subheading="true"
        classList={"ApiCategoryList " + method + " method"}
        addSidebar="true"
      />
      <div class="row section">
        <div class="col col--6">
          <Markdown>{endpointData.description(endpoint, method)}</Markdown>
          <Parameters endpoint={endpoint} method={method} />
        </div>
        <div class="col col--6">
          <APIEndpointCodeSamples
            filename={endpointData.filename(endpoint, method, tag)}
          />
        </div>
      </div>
    </>
  );
}

const APIEndpointCodeSamples = ({ filename }) => {
  switch (filename) {
    case "@site/src/pages/apis/embeds/tag/Organization/get/api/v1/organizations.md":
      return <ListOrganizations />;
    case "@site/src/pages/apis/embeds/tag/Organization/get/api/v1/organizations/{id}.md":
      return <GetOrganization />;
    case "@site/src/pages/apis/embeds/tag/Authentication/post/oauth/token.md":
      return <OauthToken />;
    case "@site/src/pages/apis/embeds/tag/Authentication/get/oauth/authorize.md":
      return <OauthAuthorize />;
    default:
      return <></>;
  }
};

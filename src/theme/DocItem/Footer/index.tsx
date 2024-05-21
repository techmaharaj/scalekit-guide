import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import type FooterType from "@theme/DocItem/Footer";
import { useDoc } from "@docusaurus/theme-common/internal";
import type { WrapperProps } from "@docusaurus/types";
import DocsRating from "../../../components/DocsRating";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const { metadata } = useDoc();
  return (
    <>
      {/* <DocsRating label={metadata.id} /> */}
      <Footer {...props} />
    </>
  );
}

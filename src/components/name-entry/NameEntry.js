import React from "react";

import PageContainer from "../../styles/global/PageContainer";
import NameEntryCard from "./NameEntryCard";
import NameEntryIllustration from "./NameEntryIllustration";
import { pageVariants, pageTransition } from "../../animation/pageTransition";

const NameEntry = ({ handleNameEntry }) => {
  return (
    <PageContainer
      initial="in"
      animate="normal"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <NameEntryCard handleNameEntry={handleNameEntry} />
      <NameEntryIllustration />
    </PageContainer>
  );
};

export default NameEntry;

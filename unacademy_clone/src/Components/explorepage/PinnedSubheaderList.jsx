import * as React from "react";
import List from "@mui/material/List";
import styled from "styled-components";
import styles from "./explore.module.css"

const Li = styled.li`
  font-size: 15px;
  opacity: 0.8;
  cursor: pointer;
  padding-bottom: 10px;
`;

export default function PinnedSubheaderList({ courses }) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 300,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 800,
        "& ul": { padding: 0 },
      }}
    >
    <div className={styles.scrollerPinned}>
    {courses.map((item) => (
        <Li key={`${item.id}`}>
          <ul>
              <Li key={item.id}>{item.title}</Li>   
          </ul>
        </Li>
      ))}
    </div>
     
    </List>
  );
}

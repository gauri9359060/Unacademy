import * as React from "react";
import List from "@mui/material/List";
import styled from "styled-components";

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
        maxHeight: 700,
        "& ul": { padding: 0 },
      }}
    >
    <div style={{width:280}}>
    {courses.map((item) => (
        <Li key={`${item.id}`}>
          <ul>
              <Li>{
                courses.map((item)=>{
                  return(<p>{item.title}</p>)
                })
              }</Li>   
          </ul>
        </Li>
      ))}
    </div>
     
    </List>
  );
}

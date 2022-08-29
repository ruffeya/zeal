import styled from "styled-components"
import { withStyles } from "@material-ui/core/styles"
import ListItem from "@material-ui/core/ListItem"

export const HomeWrapper = styled.div`
  width: 75vw;
  height: 90vh;
  display: flex;
  flex-flow: column;
  margin: auto;
  padding: 8px;
`

export const StyledListItem = withStyles({
  root: {
    "border-bottom": "1px solid rgba(0, 0, 0, 0.12)",
    "padding": "16px",
    "&:last-child": {
      "border-bottom": "none",
    },
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
      cursor: "pointer",
    }
  },
})(ListItem)

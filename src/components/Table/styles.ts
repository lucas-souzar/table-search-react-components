import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  box-shadow: 0px 3px 6px #0000003d;
  border-collapse: collapse;
  border-radius: 4px;

  thead {
    background-color: #009393;

    tr th {
      color: #ffffff;
      text-align: left;
      padding: 10px 14px;
      font-size: 0.8em;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.75pz;

      :first-child {
        border-radius: 4px 0px 0px 4px;
      }

      :last-child {
        border-radius: 0px 4px 4px 0px;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 10px 14px;
        color: #222222;
      }
    }
  }
`;

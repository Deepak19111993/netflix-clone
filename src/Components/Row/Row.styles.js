import styled from "styled-components";

export const RowWrapper = styled.div`
  margin-top: 40px;
  &.row {
    .row-posters {
      display: flex;
      /* overflow-y: hidden;
      overflow-x: scroll; */
      /* padding: 0 10px; */
      margin-top: 20px;
      /* flex-wrap: wrap; */
      .row-poster {
        width: 100%;
        object-fit: contain;
        max-height: 100px;
        margin-right: 10px;
        transition: transform 450ms;
        &:hover {
          transform: scale(1.08);
        }
        &:last-child {
          margin-right: 0;
        }
        &.row-poster-large {
          max-height: 250px;
          &:hover {
            transform: scale(1.09);
          }
        }
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

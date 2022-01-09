import styled from "styled-components";

// SL = Server list
// SN = Server name
// CI = Channel info
// CL Channel List
// CD Channel data
// UL = User list
// UI User info

export const Grid = styled.div `
    display: grid;

    grid-teamplate-columns: 71px 240px auto 240px;
    grid-teamplate-rows: 46px auto 52px;
    
    grid-teamplate-areas: 
        'SL SN CI CI'
        'SL CL CD UL'
        'SL UI CD UL';

    height: 100vh;
`;
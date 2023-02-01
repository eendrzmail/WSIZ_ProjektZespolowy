import { theme } from './../../../../../shared/styles/theme';
import styled from 'styled-components';

export const AnimalDashboardWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 50px;
    height: 100%;
`;

export const SubMenu = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: ${theme.colors.primaryColor};
    box-shadow: 0px 0px 15px #999999;

    a {
        display: flex;
        justify-content: center;

        svg {
            width: 35px;
            height: 35px;
            fill: white;
        }

        &.active {
            svg {
                width: 35px;
                height: 35px;
                fill: aquamarine;
            }
        }
    }
`;
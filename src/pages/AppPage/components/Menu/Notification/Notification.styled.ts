import { theme } from './../../../../../shared/styles/theme';
import styled from 'styled-components';

export const NotificationWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    svg {
        fill: white;
    }
`;

export const NotificationCount = styled.div`
    position: absolute;
    border-radius: 50%;
    background-color: red;
    bottom: 10px;
    right: -5px;
    height: 17px;
    width: 17px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    z-index: 0;
    pointer-events: none;
`;

export const NotificationListWrapper = styled.div`
    position: absolute;
    height: 400px;
    width: 300px;
    overflow-y: auto;
    background-color: ${theme.colors.backgroundColor};
    top: 100%;
    right: -50px;
    z-index: 9;
    border-radius: ${theme.borderRadius};
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 15px #999999;
`;

export const NotificationItem = styled.div`
    width: 100%;
    min-height: 57px;
    display: flex;
    align-items: center;
`;

export const IconContainer = styled.div`
    margin-left: auto;
    cursor: pointer;

    svg {
        path {
            fill: red;
        }
    }
`;
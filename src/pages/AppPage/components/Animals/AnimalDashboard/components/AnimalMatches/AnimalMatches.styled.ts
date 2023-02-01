import styled from 'styled-components';

export const MatchesWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const ChatItem = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid gray;
    padding: 5px;
    display:flex;
    align-items: center;
    border-radius: 4px;

    &:hover {
        background-color: lightgray;
    }
`;
import styled from 'styled-components';
import { theme } from '../../../../../../../../shared/styles/theme';
import SendIcon from '@mui/icons-material/Send';

export const ChatWrapper = styled.div`
    width: 500px;
    height: 70vh;
    border-radius: 0 5px 5px 0;
    background-color: ${theme.colors.backgroundColor};
    color: black;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const MessageContainer = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 30px;
    margin-top:auto;
    gap: 5px;
    border-top: 1px solid gray;
    padding-top: 15px;
`;

export const MessageBox = styled.input`
    padding: 5px;
    background-color: white;
    border-radius: 4px;
    border: 1px solid gray;
    color: black;
`;

export const ButtonWrapper = styled.button`
    background-color: transparent;
    color: black;
    padding: 2px;
    border: none;
`;

export const SendButton = styled(SendIcon)`
    cursor: pointer;
    background-color: transparent;
`;

export const MessagesWrapper = styled.div`
    height: 100%;
    overflow: auto;
    margin: 10px 3px;
    padding: 15px;
    display: flex;
    flex-direction: column-reverse;
    border: 1px solid gray;
    border-radius: 4px;
    gap: 2px;
`;

export const ChatMessageBox = styled.div`
    display: flex;
`;

export const Message = styled.span<{
    variant: 'self' | 'other'
}>`
    padding: 3px 5px;
    border-radius: 4px;
    background-color: ${props => props.variant == 'self'
        ? 'aquamarine'
        : 'lightgray'
};
    ${props => props.variant == 'self' 
        ? 'margin-left: auto'
        : 'margin-right: auto'
}
`;
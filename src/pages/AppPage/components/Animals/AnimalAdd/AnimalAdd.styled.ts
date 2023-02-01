import styled from 'styled-components';
import { theme } from '../../../../../shared/styles/theme';

export const AddAnimalWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const AnimalForm = styled.form`
    width: 800px;
    min-height: 500px;
    border-radius: ${theme.borderRadius};
    background-color: ${theme.colors.backgroundColor};
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 25px;
    box-shadow: 0px 0px 15px #999999;
`;
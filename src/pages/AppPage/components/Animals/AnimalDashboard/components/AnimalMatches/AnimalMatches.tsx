import React, { useCallback, useState } from 'react';
import { IMatch } from '../../../../../../../types/Match';
import { Box, MatchesWrapper } from './AnimalMatches.styled';
import Chat from './Chat/Chat';
import MatchesChatList from './MatchesChatList/MatchesChatList';

type Props = {
    id: string;
}

const AnimalMatches = ({
    id
}: Props) => {
    const [chatId, setChatId] = useState<IMatch | null>(null);

    const handleChange = useCallback(
        setChatId,
        []
    );

    return (
        <MatchesWrapper>
            <Box>
                <MatchesChatList
                    animalId={id}
                    onSelect={handleChange}
                />

                <Chat
                    key={chatId?.chatId}
                    animalId={id}
                    chatId={chatId?.chatId || null}
                    title={chatId?.name}
                />
            </Box>
        </MatchesWrapper>
    );
};

export default AnimalMatches;
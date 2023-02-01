import React, { useCallback, useState } from 'react';
import { IMatch } from '../../../../../../../types/Match';
import { MatchesWrapper } from './AnimalMatches.styled';
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
            <>
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
            </>
        </MatchesWrapper>
    );
};

export default AnimalMatches;
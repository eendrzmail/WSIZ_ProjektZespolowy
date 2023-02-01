import React, { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../../../../../../../app/hooks';
import { API_HOST } from '../../../../../../../../shared/common/consts';
import { getAuth, getJWT } from '../../../../../../../../shared/reducers/AuthReducer';
import { IMatch } from '../../../../../../../../types/Match';
import { IMessage } from '../../../../../../../../types/Message';
import { ButtonWrapper, ChatMessageBox, ChatWrapper, Message, MessageBox, MessageContainer, MessagesWrapper, SendButton } from './Chat.styled';
import SendIcon from '@mui/icons-material/Send';
import { FieldValues, useForm } from 'react-hook-form';

type Props = {
    animalId: string;
    chatId: number | null;
    title?: string,
}

const Chat = ({
    chatId,
    animalId,
    title,
}: Props) => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAppSelector(getAuth);
    const jwt = useAppSelector(getJWT);

    const {
        register, 
        handleSubmit,
        reset,
    } = useForm();

    const fetchChat = useCallback(
        () => {
            if (!chatId) return;
            setIsLoading(true);

            // /animals/{animalId}/chat/{chatId}
            fetch(`${API_HOST}/animals/${animalId}/chat/${chatId}`, {
                method: 'GET',
                headers: {
                    'Authorization': jwt,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json()
                    .then(data => setMessages(data.reverse()))
                )
                .finally(() => setIsLoading(false));
        },
        []
    );

    const handleOnSubmit = useCallback(
        (data: FieldValues) => {
            if (!auth) return;

            setMessages(prev => [{
                id: 999,
                senderId: +animalId,
                content: data.content,
                time: new Date()
            }, ...prev]);

            // /animals/{animalId}/chat/{chatId}
            fetch(`${API_HOST}/animals/${animalId}/chat/${chatId}`, {
                method: 'POST',
                headers: {
                    'Authorization': jwt,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .finally(() => reset());
        },
        []
    );

    useEffect(fetchChat, [fetchChat, chatId]);
    useEffect(
        () => {
            const interval = setInterval(fetchChat, 15_000);

            return () => clearInterval(interval);
        },
        []
    );

    return (
        <ChatWrapper>
            <>
                {!chatId && (
                    'Wybierz z listy'
                )}

                {chatId && (
                    <>
                        {title}
                        <MessagesWrapper>
                            <>
                                {messages
                                    .map(message => (
                                        <ChatMessageBox key={message.id}>
                                            <Message 
                                                variant={message.senderId == +animalId
                                                    ? 'self'
                                                    : 'other'
                                                }
                                            >
                                                {message.content}
                                            </Message>
                                        </ChatMessageBox>
                                    ))}
                            </>
                        </MessagesWrapper>
                        
                        <MessageContainer onSubmit={handleSubmit(handleOnSubmit)}>
                            <>
                                <MessageBox 
                                    {...register('content')}
                                />
                                
                                <ButtonWrapper type="submit">
                                    <SendButton />
                                </ButtonWrapper>
                            </>
                        </MessageContainer>
                    </>
                )}
            </>
        </ChatWrapper>
    );
};

export default Chat;
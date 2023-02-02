import React, { useCallback, useEffect, useState } from 'react';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { IconContainer, NotificationCount, NotificationItem, NotificationListWrapper, NotificationWrapper } from './Notification.styled';
import { useAppSelector } from '../../../../../app/hooks';
import { useSnackbar } from 'notistack';
import { showSnackbar } from '../../../../../components/Snackbar/Snackbar';
import { API_HOST } from '../../../../../shared/common/consts';
import { getAuth, getJWT } from '../../../../../shared/reducers/AuthReducer';
import { INotification } from '../../../../../types/Notification';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {}

const NotificationComponent = (props: Props) => {
    const auth = useAppSelector(getAuth);
    const jwt = useAppSelector(getJWT);
    const { enqueueSnackbar } = useSnackbar();
    
    const [isVisible, setIsVisible] = useState(false);
    const [notifications, setNotifications] = useState<INotification[]>([]);

    const fetchNotifications = useCallback(
        () => {
            if (!auth) return;

            // /users/{userId}/notifications
            fetch(`${API_HOST}/users/${auth.id}/notifications`, {
                method: 'GET',
                headers: {
                    'Authorization': jwt,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    if (response.ok) return response.json();
                    return Promise.reject(response);
                })
                .then(setNotifications)
                .catch(() => showSnackbar(enqueueSnackbar, null, 'Nie udało się pobrać zwierząt', 'error'));
        },
        []
    ); 

    const deleteNotifications = useCallback(
        (notificationId: number) => {
            if (!auth) return;

            // /users/{userId}/notifications
            fetch(`${API_HOST}/users/${auth.id}/notifications/${notificationId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': jwt,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    if (response.ok) {
                        return Promise.resolve();
                    }
                    return Promise.reject(response);
                })
                .then(() => {
                    () => showSnackbar(enqueueSnackbar, null, 'Usunięto', 'success');
                    fetchNotifications();
                })
                .catch(() => showSnackbar(enqueueSnackbar, null, 'Coś poszło nie tak', 'error'));
        },
        []
    ); 

    useEffect(fetchNotifications, [fetchNotifications]);

    useEffect(
        () => {
            setInterval(fetchNotifications, 15_000);
        },
        []
    );

    return (
        <NotificationWrapper>
            <div>
                <NotificationsIcon 
                    onClick={() => setIsVisible(prev => !prev)}
                    style={{cursor: 'pointer'}}
                />

                {!!notifications.length && (
                    <NotificationCount>
                        {notifications.length}
                    </NotificationCount>
                )}

            </div>

            {isVisible && (
                <NotificationListWrapper>
                    {notifications.map(notification => (
                        <NotificationItem key={notification.id}>
                            {notification.content}

                            <IconContainer onClick={() => deleteNotifications(notification.id)}>
                                <DeleteIcon />
                            </IconContainer>
                        </NotificationItem>
                    ))}
                </NotificationListWrapper>
            )}
        </NotificationWrapper>
    );
};

export default NotificationComponent;
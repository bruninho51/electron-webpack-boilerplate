import React from 'react'

export default function App() {

    const onClick = () => {
        electron.notificationApi.sendNotification('My custon Notification!')
    }

    return (
        <>
            <h1>I am app component</h1>
            <button onClick={onClick}>Notify</button>
        </>
    )
}
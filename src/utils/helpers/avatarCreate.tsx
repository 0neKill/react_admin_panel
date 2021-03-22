import React from 'react';

type TypeAvatarProps = {
    name?: string,
    url?: string,
}

export default function AvatarCreate({url, name}: TypeAvatarProps) {
    if (url) {
        return <img src={url} alt='avatar'/>
    } else if (name) {
        const first_word = name.charAt(0).toUpperCase();
        return <span>{first_word}</span>
    }
    return null;
}

import React from 'react';
import classNames from "classnames";
import AvatarCreate from "../../utils/helpers/avatarCreate";

type TypeAvatarProps = {
    name?: string,
    url?: string,
}
export const Avatar: React.FunctionComponent<TypeAvatarProps> = React.memo(({
                                                                                name, url
                                                                            }) => (
    <div className={classNames('avatar', {'avatar--review': url})}>
        <AvatarCreate name={name} url={url}/>
    </div>
));


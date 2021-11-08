import React, { ComponentProps } from 'react';

export const ButtonExample = (props: ComponentProps<'button'>): JSX.Element => {
    <button
        type="button"
        {...props}
        style={{
            backgroundColor: 'white',
            border: 'solid red',
            borderRadius: 20,
            padding: 10,
            cursor: 'pointer',
            ...props.style,
        }}
    />
};
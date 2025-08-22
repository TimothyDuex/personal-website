import React, {JSX} from 'react';
import {ListenableText} from "./ListenableText";

interface SmartListenableTextProps {
    children: React.ReactNode;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
    maxLength?: number;
}

export const SmartListenableText: React.FC<SmartListenableTextProps> = ({
                                                                            children,
                                                                            className = '',
                                                                            as = 'div',
                                                                            maxLength = 1000
                                                                        }) => {
    // Extract text content from children
    const extractText = (node: React.ReactNode): string => {
        if (typeof node === 'string') return node;
        if (typeof node === 'number') return String(node);
        if (typeof node === 'boolean' || node == null) return '';

        if (Array.isArray(node)) {
            return node.map(extractText).join(' ');
        }

        if (React.isValidElement(node)) {
            const props = node.props as { children?: React.ReactNode };
            if (props.children) {
                return extractText(props.children);
            }
        }

        return '';
    };

    const text = extractText(children).slice(0, maxLength);

    // Don't make it listenable if text is too short or empty
    if (!text || text.trim().length < 10) {
        return React.createElement(as, { className }, children);
    }

    return (
        <ListenableText text={text} className={className} as={as}>
            {children}
        </ListenableText>
    );
};
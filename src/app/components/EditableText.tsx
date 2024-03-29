import {
    Dispatch,
    HTMLInputTypeAttribute,
    SetStateAction,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { AutoResizableTextarea } from '../AutoResizableTextarea';

export type HTMLTextField = HTMLInputElement & HTMLTextAreaElement;
export type HTMLTextFieldAttributes =
    React.InputHTMLAttributes<HTMLInputElement> &
        React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface EditableTextProps extends HTMLTextFieldAttributes {
    textarea?: boolean;
    className?: string;
    disabled?: boolean;
    defaultValue?: string;
    /**
     * The HTTP method to use when updating the value. PUT by default.
     */
    method?: string;
    /**
     * Allows for string to be completely erased. False by default.
     */
    nullable?: boolean;
    /**
     * Allows for new line characters in textarea. False by default.
     */
    allowNewLine?: boolean;
    setLoading?: Dispatch<SetStateAction<boolean>>;
    /**
     * The URL to fetch to update the value
     * @example '/api/category/1'
     */
    fetchUrl: string;
    /**
     * The name of the value in the request body
     * @example 'name_en'
     */
    valueName?: string;
    /**
     * The type of the input field
     * @default 'text'
     */
    type?: HTMLInputTypeAttribute;
}

export function EditableText({
    textarea,
    allowNewLine,
    nullable,
    className,
    defaultValue,
    fetchUrl,
    method = 'PUT',
    valueName = 'value',
    type = 'text',
    setLoading: setOutsideLoading,
    disabled,
    ...props
}: EditableTextProps) {
    const fieldRef = useRef<HTMLTextField>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => setOutsideLoading?.(loading), [loading]);

    function reset() {
        if (!fieldRef.current) return;
        fieldRef.current.value = defaultValue ?? '';
    }

    const updateCategory = useMemo(
        () => async () => {
            if (!fieldRef.current) return;

            let newValue: string | null = fieldRef.current.value.trim();

            if (newValue === '') {
                if (!nullable || defaultValue === undefined) {
                    reset();
                    return;
                }
                newValue = null;
            }
            if (newValue !== defaultValue) {
                setLoading(true);
                const result = await fetch(fetchUrl, {
                    body: JSON.stringify({ [valueName]: newValue }),
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                });
                if (result.status === 200) {
                } else {
                    reset();
                }
                setLoading(false);
            }
        },
        [fetchUrl, valueName, defaultValue]
    );

    const staticProps = useMemo(() => {
        return {
            defaultValue: defaultValue,
            ref: fieldRef,
            type: type,
            ...props,
        };
    }, []);

    const dynamicProps = useMemo(() => {
        return {
            className: `${className ?? ''} ${loading && 'skeleton'}`,
            disabled: loading || disabled,
            'aria-busy': loading,
        };
    }, [loading, className, disabled]);

    const handlers = useMemo(() => {
        return {
            onBlur: () => updateCategory(),
            onKeyUp: (e: React.KeyboardEvent) => {
                if (e.key === 'Enter' && !allowNewLine) {
                    e.preventDefault();
                    updateCategory();
                }
            },
        };
    }, [updateCategory]);

    useEffect(() => {
        if (!fieldRef.current || defaultValue === undefined) return;
        fieldRef.current.value = defaultValue;
    }, [defaultValue]);

    return (
        <>
            {textarea ? (
                <AutoResizableTextarea
                    {...staticProps}
                    {...dynamicProps}
                    {...handlers}
                    allowNewLine={allowNewLine}
                />
            ) : (
                <input {...staticProps} {...dynamicProps} {...handlers} />
            )}
        </>
    );
}

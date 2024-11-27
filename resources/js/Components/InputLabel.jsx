export default function InputLabel({
    value,
    className = '',
    children,
    required,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium text-gray-700 ` +
                className
            }
        >
            {value ? value : children}
            {required ? <span className="text-red-700">*</span> : ''}
        </label>
    );
}

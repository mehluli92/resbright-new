export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-cyan-600 shadow-sm focus:ring-cyan-800 ' +
                className
            }
        />
    );
}

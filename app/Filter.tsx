interface FilterProps {
    className?: string;
    label: string;
    value: any;
    options: {label: string, value: any}[];
}

const Filter: React.FC<FilterProps> = ({className, label, value, options}) => {
    return (
        <select className={className}>
            <option value={undefined}>{label}</option>
            {options.map(option => {
                return (
                    <option
                        key={option.value}
                        selected={option.value === value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                )
            })}
        </select>
    )
}

export default Filter
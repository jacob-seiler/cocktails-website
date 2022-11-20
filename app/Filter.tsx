interface FilterProps {
    className?: string;
    label: string;
    value: any;
    options: {label: string, value: any}[];
}

const Filter: React.FC<FilterProps> = ({className, label, value, options}) => {
    return (
        <select className={className} defaultValue={value}>
            <option value={undefined}>{label}</option>
            {options.map(option => {
                return (
                    <option
                        key={option.value}
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
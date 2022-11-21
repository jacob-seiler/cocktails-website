interface TagProps {
    className?: string;
    children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({className, children}) => {
    return <p className={`${className} border inline-block py-1 px-4 rounded-md text-sm`}>{children}</p>
}

export default Tag
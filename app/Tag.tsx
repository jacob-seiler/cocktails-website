interface TagProps {
    className?: string;
    children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({className, children}) => {
    return <p className={`${className} border inline-block p-2 rounded-md`}>{children}</p>
}

export default Tag
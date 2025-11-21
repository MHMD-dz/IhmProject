interface BadgeCardProps {
    image: string;
    title: string;
    description: string;
    progressBar: number;
    progressBarColor: string ;
    borderColor: string;
    bg : string
    note: string
    noteColor: string
}

const HeroBadg = ({
    image,
    title,
    description,
    progressBarColor,
    progressBar,
    borderColor ,
    bg,
    note,
    noteColor
}: BadgeCardProps) => {
    return (
        <div 
            className={` ${bg}  rounded-2xl p-6 shadow-lg border-2 ${borderColor} text-center `}
            >
            <div className="text-5xl mb-4">
                <img src={image} alt={title} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}o</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="bg-gray-200 rounded-full h-3">
                <div className={` ${progressBarColor } h-3 rounded-full  `} style={{width: `${ progressBar * 25}%`}}></div>
            </div>
            <p className={`text-sm ${noteColor} mt-2`}>{note}</p>
        </div>
);
};

export default HeroBadg
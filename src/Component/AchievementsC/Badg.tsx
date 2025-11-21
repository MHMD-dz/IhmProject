interface BadgeCardProps {
    image: string;
    title: string;
    description: string;
    earned: boolean;
    borderColor: string;

}

const BadgeCard = ({
    image,
    title,
    description,
    earned,
    borderColor = "border-gray-300",

}: BadgeCardProps) => {
    return (
        <div
            className={`rounded-xl p-6 shadow-md text-center border-2 bg-gray-100
            ${earned ? "" : "opacity-60"} 
            ${borderColor}`}
        >
            <div className="text-4xl mb-3">
                <img src={image} alt={title} />
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-3">{description}</p>

            {earned ? (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    Earned
                </span>
            ) : (
                <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm">
                    Locked
                </span>
            )}
        </div>
    );
};

export default BadgeCard;


interface AvatarProps {
  imageUrl: string;
  size?: "sm" | "md" | "lg";
  altText: string;
}

const Avatar = ({ imageUrl, size = "md", altText }: AvatarProps) => {
    //Look up object
  const sizeClass = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
  };
  return (
    <img
      src={imageUrl}
      alt={altText}
      className={`${sizeClass[size]} rounded-full object-cover border-2 border-gray-200`}
    />
  );
};

export default Avatar;

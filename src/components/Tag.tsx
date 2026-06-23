interface TagProps {
  text: string;
  type: "en"|"bn"|"in"
}
const Tag = ({ text,type }: TagProps) => {
  const color ={
    en: "bg-blue-400",
    bn: "bg-green-400",
    in: "bg-red-400"
  }
  return (
    <div className={`${color[type]} rounded-full p-2`}>
      <span className="text-black text-base">{text}</span>
    </div>
  );
};

export default Tag;

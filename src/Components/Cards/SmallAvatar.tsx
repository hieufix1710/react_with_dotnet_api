const SmallAvatar = ({
  avatarUrl,
  info,
}: {
  avatarUrl: string;
  info: string;
}) => {
  return (
    <div className="absolute left-1 top-1 flex flex-row align-center">
      <div className="cursor-pointer">
        <img src={avatarUrl} alt={`Avatar ${info}`} className="rounded-full h-10 w-10" />
      </div>
      <div className="flex flex-col justify-start items-start">
        <small className="font-bold ml-2 cursor-pointer">_hiu.1710</small>
        <small className="ml-2">Da Nang, Viet Nam</small>
      </div>
    </div>
  );
};

export default SmallAvatar;

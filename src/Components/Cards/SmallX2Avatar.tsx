const SmallX2Avatar = ({
  avatarUrl,
  info,
}: {
  avatarUrl: string;
  info: string;
}) => {
  return (
    <div className="flex flex-row align-center">
      <div className="cursor-pointer">
        <img src={avatarUrl} alt={`Avatar ${info}`} className="rounded-full h-10 w-10" />
      </div>
    </div>
  );
};

export default SmallX2Avatar;

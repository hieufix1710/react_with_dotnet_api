import { faBookmark, faComment, faHeart, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { formatVNDateTime } from "../../Helper/formatTime";
import SmallAvatar from "./SmallAvatar";

const ArticleCard = ({ item }: { item: any }) => {
  const [heart, setHeart] = useState(false);
  const [likes, setLikes] = useState(10000);
  

  useEffect(() => {
    const timer = setInterval(
      () => setLikes(likes + Math.floor(Math.random() * 23)),
      1000
    );

    return () => {
      clearInterval(timer);
    };
  }, [likes]);

  return (
    <div className="shadow-md mb-1 pb-2">
      <div className="h-12 my-2 px-1">
        <div className="relative">
          <SmallAvatar avatarUrl={item.images[0]} info={item.name} />
          <div className="absolute right-2 top-3 cursor-pointer">
            <FontAwesomeIcon icon={faEllipsis} fontSize={20} />
          </div>
        </div>
      </div>
      <div>
        <img src={item.images[0]} alt={`Feed`} />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row p-2">
        {heart ? (
            <svg
              onClick={() => {
                setHeart(!heart);
              }}
              aria-label="Unlike"
              className="p-2 cursor-pointer"
              color="#ed4956"
              fill="#ed4956"
              height="36"
              role="img"
              viewBox="0 0 48 48"
              width="36"
            >
              <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
            </svg>
          ) : (
            <FontAwesomeIcon
              icon={faHeart}
              className="p-2 cursor-pointer"
              fontSize={20}
              onClick={() => {
                setHeart(!heart);
              }}
            />
          )}
        <FontAwesomeIcon icon={faComment} fontSize={20} className="p-2 cursor-pointer" />
        <FontAwesomeIcon icon={faPaperPlane} fontSize={20} className="p-2 cursor-pointer" />
        </div>
        <FontAwesomeIcon icon={faBookmark} fontSize={20} className="p-2 mr-2 cursor-pointer" />
      </div>
      <small className="font-bold ml-4">{`${likes} lượt thích`}</small>
      <div className="flex flex-row items-start justify-start mx-4 flex-wrap">
        <small className="font-bold">{item.authorName}</small>&nbsp;&nbsp;
        <small>{item.title}</small>
      </div>
      <small className="ml-4 text-gray-500">{formatVNDateTime(new Date())}</small>
    </div>
  );
};

export default ArticleCard;

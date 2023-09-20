import GroupMember from "./GroupMember.module.css";
import Image from "next/image";

type GroupMemberComponentProps = {
  username: string;
  tag: string;
  leader: boolean;
  avatar: string;
  banner: string;
  rank: string;
};

export default function GroupMemberComponent({
  username,
  tag,
  leader,
  avatar,
  banner,
  rank,
}: GroupMemberComponentProps) {
  return (
    <div className={GroupMember.container}>
      <div className={GroupMember.leftRect}></div>
      <div className={GroupMember.topContainer}>
        {/* <img className="avatar" src="https://via.placeholder.com/150" /> */}
        <Image
          className={GroupMember.banner}
          src={banner}
          width={150}
          height={150}
          alt=""
        />
        {/* <img className="rank" src="https://via.placeholder.com/150" /> */}
      </div>
      <div className="bottomContainer">
        <span className="username">{username}</span>
        <span className="tag">#{tag}</span>
        {leader && <Image src="/crown.png" width={20} height={20} alt="" />}
      </div>
    </div>
  );
}

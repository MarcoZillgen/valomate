import GroupMember from "./GroupMember.module.css";

type InputObject = {
  username: string;
  tag: string;
  leader: boolean;
  avatar: string;
  banner: string;
  rank: string;
};

export default ({
  username,
  tag,
  leader,
  avatar,
  banner,
  rank,
}: InputObject) => {
  return (
    <div className={GroupMember.container}>
      <div className={GroupMember.leftRect}></div>
      <div className={GroupMember.topContainer}>
        {/* <img className="avatar" src="https://via.placeholder.com/150" /> */}
        <img className={GroupMember.banner} src={banner} />
        {/* <img className="rank" src="https://via.placeholder.com/150" /> */}
      </div>
      <div className="bottomContainer">
        <span className="username">{username}</span>
        <span className="tag">#{tag}</span>
        {leader ? (
          <img className="leader" src="../../public/crown.png" />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

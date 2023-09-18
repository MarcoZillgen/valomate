"use client";

import { useEffect, useState } from "react";
import GroupMember from "@/components/GroupMember/GroupMember";

export default () => {
  const username = localStorage.getItem("username") as string;
  const tag = localStorage.getItem("tag") as string;

  const [data, setData] = useState(null) as any;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username && tag) {
      fetch(`/api/valorant/account/${username}/${tag}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [username, tag]);

  if (loading) return <></>;
  if (!data || data === null) return <></>;

  return (
    <div>
      <GroupMember
        username={data.data.name}
        tag={data.data.tag}
        leader={false}
        avatar={""}
        banner={data.data.card.wide}
        rank={""}
      />
    </div>
  );
};

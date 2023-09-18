"use client";

export default () => {
  const username = localStorage.getItem("username") as string;
  const tag = localStorage.getItem("tag") as string;

  return (
    <div>
      {username && tag ? (
        <div>
          <h1>
            {username}#{tag}
          </h1>
        </div>
      ) : (
        <div>
          <input type="text" placeholder="username" id="username" />
          <input type="text" placeholder="tag" id="tag" />
          <button
            onClick={() => {
              const username = document.getElementById(
                "username"
              ) as HTMLInputElement;
              const tag = document.getElementById("tag") as HTMLInputElement;
              localStorage.setItem("username", username.value);
              localStorage.setItem("tag", tag.value);
              window.location.reload();
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

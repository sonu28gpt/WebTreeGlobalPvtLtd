import React, { useEffect, useState } from "react";

const UserCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  }, []);

  if (!user) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="flex border rounded-lg shadow-lg p-4 w-6/12 h-64 mx-auto bg-white justify-around border-[1px] border-solid border-black">
        <div className="w-[30%] h-[90%] border-[1px] border-solid border-black rounded-md">

                <img
                    src={user.picture.large}
                    alt="Profile"
                    className="h-[100%] w-[100%] object-cover rounded-md"
                />
        </div>
      <div className="w-[50%] flex flex-col py-8 justify-stretch">
        <p className="text-lg font-semibold ">
            <span>

                {user.name.first}
            </span>
            <span className="mx-4">

                 {user.name.last}
            </span>
        </p>
        <p className="text-sm text-gray-600 py-4">{user.gender}</p>
        <p className="text-sm">{user.phone}</p>
      </div>
    </div>
  );
};

export default UserCard;

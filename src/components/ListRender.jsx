import { useState } from "react"

const ListRender = () => {
  const [list] = useState(["Matheus","Pedro","Josias"]);

  const [users, setUsers] = useState ([
    {id: 1, name: "Eduardo", age: 19},
    {id: 2, name: "Ana", age: 21},
    {id: 3, name: "Rafael", age: 5},
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
          {users.map((users) => (
            <li key={users.id}>
              {users.name} - {users.age}
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender
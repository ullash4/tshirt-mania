import React, { createContext, useState } from "react";
import Abba from "../Abba/Abba";
import Aunty from "../Auny/Aunty";
import Uncle from "../Uncle/Uncle";

export const Myconstext = createContext("ring");

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const add = () => setHouse(house + 1);

  const gift = "##@@Grandpa gift For you##@@";

  return (
    <Myconstext.Provider value={gift}>
      <div className="border-2 border-indigo-600 m-5 p-5 ">
        <div className="text-center">
          <h1 className="text-center text-2xl font-bold">
            This is Grandpa and his houses are : {house}
          </h1>
          <button
            className="bg-red-400 p-2 m-2 rounded-lg text-center"
            onClick={add}
          >
            Buy House
          </button>
        </div>

        <div className="flex justify-evenly items-center">
          <Abba house={house} gift={gift}></Abba>
          <Aunty house={house}></Aunty>
          <Uncle house={house}></Uncle>
        </div>
      </div>
    </Myconstext.Provider>
  );
};

export default Grandpa;

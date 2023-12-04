import "./globals.css";
import ReactDOM from "react-dom/client";
import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Cafe = () => {
  const { currentComponent, handleComponentChange } = useContext(AppContext);

  return (
    <div className="knowledge">
      <div className="knowledge_navbar grid grid-rows-1 grid-cols-3 flex justify-center">
        <img
          src="https://cdn.discordapp.com/attachments/742591897465520168/1181236731752755200/heart.png?ex=6580536f&is=656dde6f&hm=ee99c7e22e638a91d012bcf39a90db7cead35d0538670d541f81f12e351c86c5&"
          alt="Description of the image"
          style={{ width: '50px', height: '50px' }}
          className="fixed left-0"
        />
        <p className="ml-16 text-2xl fixed left-0">Happy Cat & Dog</p>

        <div className="butt col-start-3 w-50%">
        <button
          className="btn btn-ghost text-2xl"
          onClick={() => handleComponentChange("knowledge")}
        >
          <p>Knowledge</p>
        </button>
        <button
          className="btn btn-ghost text-2xl ml-5"
          onClick={() => handleComponentChange("cafe")}
        >
          Cafe
        </button>
        <button
          className="btn btn-ghost text-2xl ml-5"
          onClick={() => handleComponentChange("adopt")}
        >
          Adopt
        </button>
      </div>
    </div>

      <div className="banner">
        <div className="card glass shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Knowlesrthwrtgnsrtnwsrtnsrtnwrtndge</h2>
          </div>
        </div>
      </div>
      
      <div>
        <p className="ml-16 text-4xl mt-5">Cafe</p>
      </div>

      <div className="grid grid-cols-3 mt-5">
        <div className="card w-96 bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Go</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer footer-center p-10">
        <aside>
          <p className="font-bold">
            Happy Cat & Dog <br />Providing knowledge since 2023
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
};



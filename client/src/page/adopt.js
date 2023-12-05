import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Adopt() {
  
  const [informations, setInformations] = useState([]);



  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/informations');
      console.log(response.data); // ตรวจสอบข้อมูลที่ได้จาก API
      setInformations(response.data.information); // ใช้ response.data.information แทน response.data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

    

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
        <Link to="/">
          <button className="btn btn-ghost text-2xl">
            <p>Knowledge</p>
          </button>
        </Link>
        <Link to="/cafe">
          <button className="btn btn-ghost text-2xl ml-5">Cafe</button>
        </Link>
        <Link to="/adopt">
          <button className="btn btn-ghost text-2xl ml-5">Adopt</button>
        </Link>
      </div>
    </div>

      <div className="banner-adopt">
        <div className="card glass shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">การรับเลี้ยงหมาแมว ไม่เพียงแค่เป็นการให้รักและบ้าน <br/>แต่เป็นการเปลี่ยนชีวิตของทั้งคุณและพวกเขาในทางที่ไม่เคยคาดคิด</h2>
          </div>
        </div>
      </div>
      
      <div>
        <p className="ml-16 text-4xl mt-5">Adopt</p>
      </div>

      <div className="grid grid-cols-3 mt-5 gap-4">
        {/* บรรทัดด้านล่างไว้แก้ Fillter */}
        {informations.filter(information => information.info_category_id === 3).map((information) => (
          <div className="card w-96 bg-base-100 shadow-xl m-auto m-4" key={information._id}>
            <div className="card-body">
              <h2 className="card-title">{information.info_title}</h2>
              <p>{information.info_desc}</p>
              <div className="card-actions justify-end">
                <a href={information.info_link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>
        ))}
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


export default  Adopt;
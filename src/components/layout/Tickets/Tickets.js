import React from "react";
import { useSelector } from "react-redux";
import { TbProgress } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import "./Tickets.css";
// import "./DashBoard.css";
import Card from "../../Card/Card";
import myImage from '../../assets/profileimg.jpeg';

const Tickets = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dash-container">
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dash-card">
                <div >
                  <div className="leftView">
                    {!user ? (
                      <TbProgress />
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "10px", height: "4px", display: 'inline-block' }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src={myImage}
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    {/* <AiOutlinePlus />{" "} */}
                    {/* <span style={{ letterSpacing: "1px" }}>...</span> */}
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Tickets;



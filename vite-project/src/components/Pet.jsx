import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
const Pet = (props) => {
  const [image, setimage] = useState(props.images[0])
  const navigate =useNavigate();
  return (
    <div className="m-3 d-flex border w-75">
      <div>
        <div className="d-flex m-3">
          <div>
            {" "}
            <img
              src={image}
              
              style={{ width: 120, hiegth: 120, borderRadius: 10 }}
              data-testid="thumbnil"
               onClick={()=>navigate(`/Detailes/${props.id}`)}
            />
          </div>
          <div>
            {props.images.map((e ,i) => {
             // console.log(e)
              return (
                <img key={i}
                  src={e}
                  style={{
                    width: 50,
                    hieght: 50,
                    borderRadius: "50%",
                    margin: "10px",
                  }}
                onClick ={()=>{
              //  console.log(e , i)
                setimage(e)
                }} />
              );
            })}
          </div>
        </div>

        <div className="m-3 d-flex m-5">
          <div className="m-3">
            <h5>{props.name}</h5>
            <b>{props.animal}</b>
            <p>{props.breed}</p>
          </div>
          <div className="m-3">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Pet;

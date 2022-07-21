import React, {useState} from 'react';
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import "./Contains.css";
import Minibox from './Minibox';


const Contains = ({data}) => {
    const [display,setDisplay] = useState("none");
    const [imgpref,setImgpref] = useState(data.image1);
    const [cost,setCost] = useState(<b><h4>₹{data.cost}</h4></b>);
    const [line,setLine] = useState("none");
    const Display=(elem)=>{
      setImgpref(elem);
    }
    const handleEnter=()=>{
      setDisplay("grid");
      setCost(<Button >SELECT OPTION</Button>)
    }
    const handleLeave=()=>{
      setDisplay("none");
      setCost(<b><h4>₹{data.cost}</h4></b>)
    }
    // console.log(cost);
      return (
        <div>
          <Box key={data.id} className="modulebox" minW="220px" maxW="330px" w='100%' margin="auto" boxShadow="0px 1px 10px lightblue" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' onMouseEnter={()=>handleEnter()} onMouseLeave={()=>handleLeave()}>
              <Image src={imgpref} style={{height:"50%",margin:"auto"}} />
              <div style={{height:"20%",marginTop:"-10%",width:"90%",margin:"auto"}}>
                  <div style={{display:`${display}`,gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"5px"}}>
                      <Minibox mini={data.image1} set={Display} />
                      <Minibox mini={data.image2} set={Display} />
                      <Minibox mini={data.image3} set={Display} />
                      <Minibox mini={data.image4} set={Display} />
                  </div>
              </div>
              <h4 onMouseEnter={()=>setLine("underline")} onMouseLeave={()=>setLine("none")} style={{padding:"0px 15px",textDecoration:line}}>{data.name1}</h4>
              {cost}
          </Box>
        </div>
      ) 
}

export default Contains
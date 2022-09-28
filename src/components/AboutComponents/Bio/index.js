import { useEffect, useState } from "react";
import Loader from '../../SharedComponents/Loader';
import Hobbies from "../Hobbies";
import {AboutWrapper, Content, BioWrapper, BioImage } from "./BioElements";
import Footer from "../../SharedComponents/Footer";
import axios from 'axios';
import {API} from '../../../constants/index'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bio = () =>{

    const [bio, setBio] = useState([]); 
    const [hobbies, setHobbies] = useState([]);
    const [loading, setLoading] = useState(false);

    const filter_tags = (content) => {
        return  content.replace(/<p>(.*)<\/p>/g, "$1\n");
    }
    useEffect (() =>{
        AOS.init({ duration: 1000 });
        const getAboutInfo= async() =>{
            setLoading(true);
             await axios.get(`${API}/wp-json/wp/v2/About_info?&filter[orderby]=date&order=asc`)
              .then((response) =>{
                setLoading(false);
                let hobbies = {};
                 for(var i=0; i< 1; i++){
                      setBio({"content": filter_tags(response.data[i].acf.bio.bio), "image": response.data[i].acf.bio.my_image.url })
                    
                    hobbies = response.data[i].acf.hobbies

                }
                   
                 for(let hobby of Object.values(hobbies)){
                      let Hobby = {
                       "content": filter_tags(hobby.description), 
                       "image": hobby.sample_image.url
                   }
                  setHobbies(hobbies => [...hobbies, Hobby ])
                 }

                }).catch((error) =>{
                setLoading(false);
                console.log(error)
              })
    
        
    
        }
        getAboutInfo();
    }, [])

    return(
        <>
         {loading? <Loader/> :
         <div>
         <AboutWrapper>
        <BioWrapper>
            <BioImage data-aos="fade-up" src={bio.image}/>
            <Content data-aos="fade-up">{bio.content}</Content>
        </BioWrapper>
         
        <Hobbies hobbies={hobbies} loading={loading}/>
        </AboutWrapper>
        <Footer/>
        </div>
         }
       </>
    )


}

export default Bio;
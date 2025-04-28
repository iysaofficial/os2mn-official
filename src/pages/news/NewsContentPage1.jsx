import '../../assets/css/Header.css'
import HeaderComp from "../../components/HeaderComp"
import "../../assets/css/news/NewsContent.css"
import NewsContentComp from "../../components/news/NewsContentComp"



const NewsContentPage = () =>{
    return(
        <>
        <br />
        <br />
        <br />
        <HeaderComp header={"IYSA Olympiad News"}></HeaderComp>
        <NewsContentComp 
            header="Inaugural National Youth Biology Olympiad and 3rd International Youth Biology Olympiad Successfully Implemented Full Online"
            image="./assets/images/news/news1.jpg" 
            paragraf1="DEPOKPOS - You already know that IYSA now also organizes National and International Olympiad events? Well in this April, IYSA is again organizing a full online Biology Olympiad at the International level, namely the International Youth Biology Olympiad (IYBO) for the second time and also holding a national level which is intended for national participants only under the name National Youth Biology Olympiad (NYBO)."
            paragraf2="This year's Olympic event is still in collaboration with the ITS Actuarial Department chaired by Assoc Prof. Soehardjoepri, M.Si. There are about 85 teams participating in this NYBO and IYBO, where for international participants come from 7 countries including Indonesia, Malaysia, Kazakhstan, Thailand, Singapore, India, Turkmenistan."
            paragraf3="As before, the Biology Olympiad was held in 2 rounds."
            paragraf4="The first round was held on April 22 which was accompanied by an opening ceremony, and the second round was held on April 26."
            paragraf5="Participants who made it to the second round competed for gold, silver and bronze medals. Meanwhile, participants who did not make it to the second round received an honorable mention."
            paragraf6="The announcement of the winners itself was held on May 1, along with the announcement of the winners of IIIEX and OSPC participants who participated in the online competition"
            paragraf7="Thank you to the participants who have participated in NYBO & IYBO this time, and for those of you who have not participated in the Olympics organized by IYSA, don't be discouraged because in June we will hold the Chemistry Olympics at the high school and university levels for national and international levels."
            paragraf8="See you at the next IYSA event!"
            paragraf9="Source :"
            sourceLink="https://www.depokpos.com/2024/05/national-youth-biology-olympiad-perdana-dan-international-youth-biology-olympiad-ke-3-sukses-terlaksana-secara-full-online/"
            sourceText="https://www.depokpos.com/2024/05/national-youth-biology-olympiad-perdana-dan-international-youth-biology-olympiad-ke-3-sukses-terlaksana-secara-full-online/"
        />

        
        </>
    )
}

export default NewsContentPage
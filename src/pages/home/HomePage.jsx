import HeroComp from '../../components/home/HeroComp'
import '../../assets/css/home/Home.css'
import AboutComp from '../../components/home/AboutComp'
import CategoryComp from '../../components/home/CategoryComp'
import ObjectiveComp from '../../components/home/ObjectiveComp'
import ClassComp from '../../components/home/ClassComp'
import LogoComp from '../../components/home/LogoComp'


const HomePage = () =>{
    return(
        <>
        <br />
        <br />
        <HeroComp></HeroComp>
        <AboutComp></AboutComp>
        <ClassComp></ClassComp>
        <ObjectiveComp></ObjectiveComp>
        <CategoryComp></CategoryComp>
        <br />
        <br />
        <br />
        <LogoComp></LogoComp>
        </>
    )
}

export default HomePage
import HeroComp from '../../components/home/HeroComp'
import '../../assets/css/home/Home.css'
import AboutComp from '../../components/home/AboutComp'
import CategoryComp from '../../components/home/CategoryComp'
import ObjectiveComp from '../../components/home/ObjectiveComp'
import ClassComp from '../../components/home/ClassComp'
import LogoComp from '../../components/home/LogoComp'
import AfterEventComp from '../../components/home/AfterEventComp'
import NewsComp from '../../components/home/NewsComp'


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
        <AfterEventComp></AfterEventComp>
        {/* <NewsComp></NewsComp> */}
        <LogoComp></LogoComp>
        </>
    )
}

export default HomePage
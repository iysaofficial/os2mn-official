const HeroComp = () =>{
    return(
        <>
        <section className="hero-section">
            <div className="hero-container">
                <img src="./assets/images/logo/OSSMN.png" alt=""/>
                <h1>Olimpiade Sains Siswa Madrasah Nasional</h1>
                {/* <p>Pendaftaran Olimpiade Sains Siswa Madrasah Nasional telah dibuka!<br /> Bergabunglah dengan acara bergengsi ini dan dapatkan pengalaman yang tak terlupakan!
                </p> */}
                <br />
                <br />
                <a href="#" className="registration-button">Segera Hadir 2025</a>
                <br />
                <br />
                <br />
                <div className="hero-social-icon">
                    <span>Follow us</span>
                    <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="https://www.instagram.com/os2mn.officiall?igsh=d3N2d3EwaG40dmow" target='_blank'><i className='fab fa-instagram instagram-bg'></i></a>
                    <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></a>
                    <a href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></a>
                    <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></a>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroComp
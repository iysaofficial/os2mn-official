import '../assets/css/Footer.css'

const FooterComp = () =>{
    return(
        <>
        <section className='footer-section'>
        <div className="container-fluid justify-content-center">
            <div className="row py-5">
                <div className="col">
                    <div className="footer-card border-0">
                        <div className="card-body text-center ">
                            <h2><b>Subscribe to our newsletter</b></h2>
                            <p className="pl-0 ml-0 mb-5">Subscribe to our newsletter to receive our latest news and exclusive deals.</p>
                            <form action="https://formspree.io/f/xoqgjrok" method="POST">
                            <div className="row text-center justify-content-center">
                                <div className="col-auto">
                                    <div className="input-group-lg input-group mb-3 ">   
                                        <input type="email" name='email' className="form-control" placeholder="Masukan Email Anda" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <div className="input-group-append"><button className="footer-btn" type="submit" id="button-addon2"> <b>Submit</b></button></div>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mx-0 px-0"/>
            <footer>
                <div className="row justify-content-around mb-0 pt-5 pb-0 ">
                    <div className=" col-11">
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-12 font-italic align-items-center mt-md-3 mt-4">
                            <h5><b className="text-dark"><span className="text-muted"> OS2MN</span></b></h5>
                            <p>kompetisi sains untuk peserta didik pada jenjang MI hingga MA di Indonesia. Olimpiade ini merupakan sebuah kompetisi yang diselenggarakan untuk menguji kemampuan dan pengetahuan para pelajar.</p>
                            </div>
                            <div className="col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                    <li className="mt-md-3 mt-4">Link</li>
                                    <li><a href="/" className='footer-link'>Utama</a></li>
                                    <li><a href="https://drive.google.com/file/d/1aDnrz6M5hoOOp_-bTYb5NeLUWjzOLTh0/view?usp=drive_link" target='_blank' className='footer-link'>Buku Panduan</a></li>
                                    <li><a href="/ContactPage" className='footer-link'>Hubungi Kami</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                    <li className="mt-md-3 mt-4">Social Media</li>
                                    <li><a href="https://www.facebook.com/profile.php?id=100063979907207" className='footer-link' target='_blank'>Facebook</a></li>
                                    <li><a href="https://www.instagram.com/os2mn.officiall?igsh=d3N2d3EwaG40dmow" className='footer-link' target='_blank'>Instagram</a></li>
                                    <li><a href="https://www.youtube.com/@IYSAOfficial" className='footer-link' target='_blank'>Youtube</a></li>
                                    <li><a href="https://www.tiktok.com/@iysa.official" className='footer-link' target='_blank'>Tiktok</a></li>
                                    <li><a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" className='footer-link' target='_blank'>Linkedin</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-auto col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                    <li className="mt-md-3 mt-4">Office</li>
                                    <li><a href="mailto:iysa.olympiad@gmail.com" className='footer-link'>iysa.olympiad@gmail.com</a> </li>
                                    <li><a href="https://wa.me/+6283870026877" className='footer-link'>+6283870026877</a></li>
                                    <li><a href="https://goo.gl/maps/9x18coXGCmSscKec6" className='footer-link'>Jl. Kemang, Pasir Putih, Kecamatan. <br />Sawangan, Kota Depok, Jawa Barat 16519</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <div className="bottom-details">
            <div className="bottom_text">
                <span className="copyright_text">Copyright &#169; 2024 <a href="#">OS2MN Official.</a>All rights reserved</span>
                <span className="policy_terms">
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & Condition</a>
                </span>
            </div>
        </div>
        </section>
        </>
    )
}

export default FooterComp
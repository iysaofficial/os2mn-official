import React, { useEffect } from 'react';

const ContactComp = () =>{
    useEffect(() => {
        const inputs = document.querySelectorAll(".input");

        function focusFunc() {
            let parent = this.parentNode;
            parent.classList.add("focus");
        }

        function blurFunc() {
            let parent = this.parentNode;
            if (this.value === "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach(input => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);
        });

        // Cleanup function to remove event listeners
        return () => {
            inputs.forEach(input => {
                input.removeEventListener("focus", focusFunc);
                input.removeEventListener("blur", blurFunc);
            });
        };
    }, []); // Empty dependency array means this effect runs only once after the initial render

    return(
        <>
            <section className='contact-section' id='contact'>
            <div className="container1">
                {/* <span className="big-circle"></span> */}
                {/* <img src="./assets/images/shape.png" alt="" className="square"/> */}
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title">Ayo hubungi kami</h3>
                        <p>
                        <p>
                            Jangan ragu untuk menghubungi kami. Kami di sini untuk membantu Anda dengan semua kebutuhan Anda.
                        </p>

                        </p>

                        <div className="info">
                            <div className="information">
                                <img src="./assets/images/icon/location.png" className="contact-icon" alt="" />
                                <a href='https://goo.gl/maps/9x18coXGCmSscKec6' target='_blank'>Jl. Kemang No. 63 RT 03 RW 06</a>
                            </div>
                            <div className="information">
                                <img src="./assets/images/icon/email.png" className="contact-icon" alt="" />
                                <a href='mailto:youngscientist.iysa@gmail.com' target='_blank'>youngscientist.iysa@gmail.com</a>
                            </div>
                            <div className="information">
                                <img src="./assets/images/icon/phone.png" className="contact-icon" alt="" />
                                <a href='https://wa.me/+6281770914129' target='_blank'>+62817-7091-4129</a>
                            </div>
                        </div>

                        <div className="social-media">
                            <p>Connect with us :</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/os2mn.officiall?igsh=d3N2d3EwaG40dmow" target='_blank'>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'>
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a href="https://www.tiktok.com/@iysa.official" target='_blank'>
                                    <i className="fab fa-tiktok"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>
                    
                        <form action="https://formspree.io/f/meqylpkl" autoComplete='off' method='POST'>
                            <h3 className="title">Hubungi Kami</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input"/>
                                <label htmlFor="">Nama</label>
                                <span>Nama</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input"/>
                                <label htmlFor="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input"></textarea>
                                <label htmlFor="">Pesan</label>
                                <span>Pesan</span>
                            </div>
                            <input type="submit" value={"Kirim"} className="btn"/>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default ContactComp
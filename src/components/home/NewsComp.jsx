const NewsComp = () => {
    return(
        <>
        <section className="news-main-section" id="news-main-section">
        <br />
        <br />
        <br />
        <h1 className="section-header">Liputan Media</h1>
        <br />
        {/* <br /> */}
        <br />
        <section className="post news-container news-section">
            <div className="post-box">
                <a href="https://jabaran.id/os2mn-2025-sukses-digelar-tampilkan-semangat-kompetisi-ilmiah-pelajar-madrasah-se-indonesia/" target="_blank">
                <img src="./assets/images/news/news1baru.jpg" alt="" className="post-img"/>
                <h2 className="category">OS2MN</h2>
                <a href="/NewsContentPage1" className="post-title">OS2MN 2025 Sukses Digelar, Tampilkan Semangat Kompetisi Ilmiah Pelajar Madrasah Se-Indonesia</a>
                <span className="post-date">28 April 2025</span>
                <p className="post-decription">Jabaran.id – Dunia pendidikan madrasah Indonesia kembali menunjukkan prestasi gemilang melalui penyelenggaraan Olimpiade Sains Siswa Madrasah Nasional (OS2MN) 2025. Ajang bergengsi yang dihelat oleh Indonesian Young Scientist Association (IYSA) untuk kedua kalinya ini berlangsung secara daring dari tanggal 10 hingga 17 April 2025, berhasil menyedot antusiasme ratusan pelajar madrasah dari berbagai penjuru tanah air.</p>

                <div className="profile">
                    <img src="./assets/images/news/logo1.jpeg" alt="" className="profile-img"/>
                    <span className="profile-name">Jabaran.id</span>
                </div>
                </a>
            </div>
        </section>
        <br />
        <br />
        <br />
        </section>
        </>
    )
}

export default NewsComp
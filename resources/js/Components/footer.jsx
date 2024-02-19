export default function Footer() {
    return (
        <>
            <footer id="contact" className="contact py-5" style={{ backgroundColor: '#2A2D54', color: 'white' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html" className="text-decoration-none">Elmuna Computindo</a>
                                </div>
                                <p>
                                    Banyak Produk Unggulan yang tersedia dengan harga yang bersahabat.
                                </p>
                                <div className="footer-contact">
                                    <p>info@elmunakebumen73@gmail.com</p>
                                    <p>+62 822-2672-7986</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="single-footer-widget">
                                <h2>about devloon</h2>
                                <ul>
                                    <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>about us</a></li>
                                    <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>career</a></li>
                                    <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>terms <span> of service</span></a></li>
                                    <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>privacy policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="single-footer-widget">
                                <h2>top brands</h2>
                                <div className="row">
                                    <div className="col-md-7 col-xs-6">
                                        <ul>
                                            <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>LENOVO</a></li>
                                            <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>HP</a></li>
                                            <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>DELL</a></li>
                                            <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>ACER</a></li>
                                            <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>APPLE</a></li>
                                            <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>ASUS</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5 col-xs-6">
                                        <ul>
                                            <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>Laptop Gaming</a></li>
                                            <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>Laptop AMD RYZEN 5</a></li>
                                            <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>Laptop Intel I5</a></li>
                                            <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>Laptop Editing Video</a></li>
                                            <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>Laptop Sekolah Online</a></li>
                                            <li className="list-group-item"><a href="#" className="text-decoration-none" style={{ color: 'white' }}>Laptop Kerja</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-offset-1 col-md-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h2>news letter</h2>
                                <div className="footer-newsletter">
                                    <p>
                                        Subscribe to get latest news update and informations
                                    </p>
                                </div>
                                <div className="hm-foot-email">
                                    <div className="foot-email-box">
                                        <input type="text" className="form-control" placeholder="Add Email" style={{ backgroundColor: '#1D1F38', color: 'white' }} />
                                    </div>
                                    <div className="foot-email-subscribe">
                                        <span><i className="fa fa-arrow-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <p>
                                &copy; copyright.designed and developed by <a href="https://www.themesine.com/" className="text-decoration-none" style={{ color: 'white' }}>elmuna
                                    computindo</a>.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <div className="footer-social">
                                <a href="#" className="text-decoration-none" style={{ color: 'white' }}><i className="fa fa-facebook"></i></a>
                                <a href="#" className="text-decoration-none" style={{ color: 'white' }}><i className="fa fa-instagram"></i></a>
                                <a href="#" className="text-decoration-none" style={{ color: 'white' }}><i className="fa fa-linkedin"></i></a>
                                <a href="#" className="text-decoration-none" style={{ color: 'white' }}><i className="fa fa-pinterest-p"></i></a>
                                <a href="#" className="text-decoration-none" style={{ color: 'white' }}><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="scroll-Top">
                    <div className="return-to-top">
                        <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title=""
                            data-original-title="Back to Top" aria-hidden="true"></i>
                    </div>
                </div>
            </footer>
        </>
    )
}
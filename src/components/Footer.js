import styled from 'styled-components';

const footer = () => {
    return(
        <FooterContainer className="main-footer">
        <div className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Desti Nur Fauzi Rahmawati</h4>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Klaten</h4>
                                <ul className="list-unstyled">
                                    <li>Ds Ngolodono</li>
                                    <li>Kec Karangdowo</li>
                                    <li>Jawa Tengah</li>
                                </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Kontak</h4>
                                <ul className="list-unstyled">
                                    <li>destinurfauzirahmawati@gmail.com</li>
                                </ul>
                        </div>              
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </FooterContainer> 
        
    );
}

export default footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark); 
    padding-top: 3rem;
    color: var(--mainWhite);

}
.footer-bottom {
    padding-top: 3rem;  
    padding-botton: 2rem;
;`

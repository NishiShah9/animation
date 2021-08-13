import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FilterListIcon from '@material-ui/icons/FilterList';

function Animaitation() {
    return (
        <div>
            <div className="header">
                <div className="pl-40 cursor-pointer">
                    <MenuIcon fontSize="large" />
                </div>
                <div className="header-yellow"></div>
                <div className="pr-40">
                    <div className="d-flex font-size-small pr-40">
                        <div className="pr-15 "><button className="button-exposide cursor-pointer">ALL  EPISODE</button></div>
                        <div className="pr-10 pt-5">EN</div>
                        <div classname="filter-icon pt-2"><FilterListIcon fontSize="small" /></div>
                    </div>
                </div>

            </div>
            <div class="slider-one">
                <div class="slider-one-image">
                    <div class="slider-text">
                        <h1>The King</h1>
                        <p>Today, wild lions live in sub-Saharan Africa and in Asia.
                            The lion (Panthera leo) is a large mammal.
                        </p>
                    </div>
                    <div class="slider-text-right">
                        <div className="d-flex">
                            <div className="text">The Lion King</div>
                            <div>
                                <p>1</p>
                                <div>-</div>
                                <p>4</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-page-bottom">
                        <div className="footer-page-no">1</div>
                    </div>
                </div>
            </div>
            <div class="slider-two">
                <div class="slider-two-image">
                    <div class="slider-text">
                        <h1>The Elephant Queen</h1>
                        <p>The African elephant is the world's largest land mammal.
                        </p>
                    </div>
                    <div class="slider-text-right">
                        <div className="d-flex">
                            <div className="text">The Elephant Queen</div>
                            <div>
                                <p>2</p>
                                <div>-</div>
                                <p>4</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-page-bottom">
                        <div className="footer-page-no">2</div>
                    </div>
                </div>
            </div>
            <div class="slider-three">
                <div class="slider-three-image">
                    <div class="slider-text">
                        <h1>The Tiger </h1>
                        <p>The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera.</p>
                    </div>
                    <div class="slider-text-right">
                        <div className="d-flex">
                            <div className="text">The Panthera tigris</div>
                            <div>
                                <p>3</p>
                                <div>-</div>
                                <p>4</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-page-bottom">
                        <div className="footer-page-no">3</div>
                    </div>
                </div>
            </div>
            <div class="slider-four">
                <div class="slider-four-image">
                    <div class="slider-text">
                        <h1>The Kingfisher</h1>
                        <p>Kingfishers are famous for their fishing skills. </p>
                    </div>
                    <div class="slider-text-right">
                        <div className="d-flex">
                            <div className="text">The Kingfisher</div>
                            <div>
                                <p>4</p>
                                <div>-</div>
                                <p>4</p>

                            </div>
                        </div>
                    </div>
                    <div className="footer-page-bottom">
                        <div className="footer-page-no">4</div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="d-flex pl-40">
                    <div className="pr-15"><FacebookIcon fontSize="small" /></div>
                    <div className="pr-15"><InstagramIcon fontSize="small" className="pr-2" /></div>
                    <div className="pr-15"><YouTubeIcon fontSize="small" className="pr-2" /></div>
                </div>
                <div className="footer-page-no-div">
                    {/* <div className="footer-page-no">1</div> */}
                </div>
                <div className="d-flex pr-40">
                    <p className="footer-text cursor-pointer">TERMS & CONDITIONS</p>
                    <p className="footer-text">|</p>
                    <p className="footer-text cursor-pointer">PRIVACY</p>
                    <div className="footer-text">|</div>
                    <div className="footer-text cursor-pointer">COOKIES </div>
                </div>

            </div>

        </div>
    )
}

export default Animaitation

import './App.scss';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FilterListIcon from '@material-ui/icons/FilterList';
function App() {
    return (
        <div>
           <div class="section">
                Scroll down to see the effect
            </div>
            <div class="section bg-static">
                <div class="bg-move"></div>
            </div>
            <div class="section">
                The boat image is moving only when scrolling.
            </div>
        </div>
    );
}

export default App;

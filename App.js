
import './App.css';
export default function App() {
  return (
    <body>
    <nav id="navbar">
        <div id="title"><img src="images/Logos/Logo.png" />
            <div>ANISTREAM</div>
        </div>
        <ul>
            <li><a href="#">Shows</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Manga</a></li>
            <li><a href="#">Upcoming</a></li>
        </ul>
        <a href="html/login.html"><button type="submit" id="login-btn">Login</button></a>
        <a href="#"><button type="submit" id="signin-btn">Sign in</button></a>
    </nav>

    <div id="slideshow-container">
        <div id="lb-heading">
            Watch Attack on Titan : The final season streaming now !
        </div>
        <img src="images/Attack-on-Titan-Season-4-Poster.webp" />
    </div>

    <div class="popanime-container">
        <div id="pop-anime-heading">MOST POPULAR ANIME</div>
        <div id="pop-anime-heading-divider"></div>
        <div class="popanime-titles-container">
            <div class="title-container">
                <img src="images/death note poster.jpg" />
                <div>Death Note</div>
            </div>
            <div class="title-container">
                <img src="images/Demon slayer poster.jpg" />
                <div>Demon Slayer</div>
            </div>
            <div class="title-container">
                <img src="images/dragon-ball-z-anime-wallpaper-preview.jpg" />
                <div>Dragon Ball Z</div>
            </div>
            <div class="title-container">
                <img src="images/mha poster.webp" />
                <div>My Hero Academia</div>
            </div>
            <div class="title-container">
                <img src="images/naruto poster.jpg" />
                <div>Naruto</div>
            </div>
        </div>
    </div>

    <div id="plan-heading">Plans</div>
    <div id="plans-heading-divider"></div>
    <div class="plans-container-parent">
        <div class="plans-container">
            <div id="planbox-heading">Free</div>
            <div id="planbox-cost">$0/month</div>
            <ul>
                <li>Free for liftime</li>
                <li>Limited shows</li>
                <li>Limited mangas</li>
                <li>On-Air episodes after 1 month</li>
                <li>Standard Quality</li>
            </ul>
        </div>

        <div class="plans-container">
            <div id="planbox-heading">Pro</div>
            <div id="planbox-cost">$5/month</div>
            <ul>
                <li>Only on 1 device</li>
                <li>All shows</li>
                <li>All mangas</li>
                <li>On-Air episodes after 2 hours</li>
                <li>High Quality</li>
            </ul>
        </div>

        <div class="plans-container">
            <div id="planbox-heading">Premium</div>
            <div id="planbox-cost">$15/month</div>
            <ul>
                <li>Upto 4 devices</li>
                <li>All shows</li>
                <li>All mangas</li>
                <li>On-Air episodes after 2 hours</li>
                <li>Highest Quality(4K)</li>
            </ul>
        </div>
    </div>

    <footer>
        <img src="images/Logos/Logo.png" />
        <div>ANISTREAM</div>

        <ul class="misc-links">
            <li><a href="">About</a></li>
            <li><a href="">Licenses</a></li>
            <li><a href="">Streaming Rights</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Help</a></li>
        </ul>
    </footer>
</body>
  );
}

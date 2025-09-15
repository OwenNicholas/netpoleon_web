'use client';

import { useEffect, useRef } from 'react';

export default function SocialAnimation() {
  const containerRef = useRef();

  useEffect(() => {
    // Add CSS styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      .socialAnimationWrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .socialAnimation {
        width: 800px;
        height: 600px;
        margin: 20px auto;
        position: relative;
        transform: scale(1.5);
      }
      
      .socialAnimation li {
        position: absolute;
        border-radius: 50%;
        border: 1px solid #f97316;
        list-style-type: none;
        animation: scaleLi 4s ease-in-out infinite;
      }
      
      @keyframes scaleLi {
        0% { 
          transform: scale(1);
        }
        45% { 
          transform: scale(1);
        }
        60% {
          transform: scale(1.2);
        }
        75% { 
          transform: scale(1);
        }
        100% { 
          transform: scale(1);
        }
      }
      
      .socialAnimation .person {
        width: 80px;
        height: 80px;
        margin: 110px 0 0 160px;
        z-index: 9;
        border: 3px solid #f97316;
        background-color: #f97316;
        box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
      }
      
      .socialAnimation .person img {
        width: 70px;
        border-radius: 50%;
        margin: 5px;
        background-color: #f97316;
      }
      
      .socialAnimation li div.connector {
        position: absolute;
        background-color: #f97316;
        height: 5px;
      }
      
      .socialAnimation li div.connector span {
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #f97316;
        margin: -5px 0 0 0;
        position: absolute;
        animation: connections 4s ease-in-out infinite;
      }
      
      .socialAnimation li div.connector span.two {
        animation: connections 4s ease-in-out infinite 1s;
      }
      
      @keyframes connections {
        0% { left: 0}
        80% { left: 100%; }
      }
      
      .socialAnimation li .containerImg {
        position: absolute;
        border-radius: 50%;
        background-color: #f97316;
        transition: background 0.3s linear;
        z-index: 10;
        background-repeat: no-repeat;
      }
      
      .socialAnimation .facebook {
        width: 90px;
        height: 90px;
      }
      
      .socialAnimation .facebook .containerImg {
        background-image: url("http://szymondziewonski.com/pictures/website/facebookIcon.png");
        width: 80px;
        height: 80px;
        margin: 5px;
      }
      
      .socialAnimation .facebook:hover .containerImg {
        background-image: url("http://szymondziewonski.com/pictures/website/facebookIconHover.png");
      }
      
      .socialAnimation .facebook div.connector {
        position: absolute;
        background-color: #f97316;
        height: 5px;
        width: 150px;
        margin: 105px 0 0 65px;
        transform: rotate(-115deg);
      }
      
      .socialAnimation .googlePlus {
        width: 85px;
        height: 85px;
        margin: 20px 0 0 240px;
      }
      
      .socialAnimation .googlePlus .containerImg {
        background-image: url("http://szymondziewonski.com/pictures/website/googlePlusIcon.png");
        width: 75px;
        height: 75px;
        margin: 5px;
      }
      
      .socialAnimation .googlePlus:hover .containerImg {
        background-image: url("http://szymondziewonski.com/pictures/website/googlePlusIconHover.png");
      }
      
      .socialAnimation .googlePlus div.connector {
        position: absolute;
        background-color: #f97316;
        height: 5px;
        width: 70px;
        margin: 90px 0 0 -35px;
        transform: rotate(-45deg);
      }
      
      .socialAnimation .twitter {
        width: 60px;
        height: 60px;
        margin: 120px 0 0 300px;
      }
      
      .socialAnimation .twitter .containerImg {
        background-image: url("http://szymondziewonski.com/pictures/website/twitterIcon.png");
        width: 50px;
        height: 50px;
        margin: 5px;
      }
      
      .socialAnimation .twitter:hover .containerImg {
        background-image: url("http://szymondziewonski.com/pictures/website/twitterIconHover.png");
      }
      
      .socialAnimation .twitter div.connector {
        position: absolute;
        background-color: #f97316;
        height: 5px;
        width: 90px;
        margin: 25px 0 0 -85px;
        transform: rotate(0deg);
      }
      
      .socialAnimation .linkedin {
        width: 50px;
        height: 50px;
        margin: 150px 0 0 40px;
      }
      
      .socialAnimation .linkedin .containerImg {
        background-image: url("http://szymondziewonski.com/pictures/website/linkedInIcon.png");
        width: 40px;
        height: 40px;
        margin: 5px;
      }
      
      .socialAnimation .linkedin:hover .containerImg {
        background-image: url("http://szymondziewonski.com/pictures/website/linkedInIconHover.png");
      }
      
      .socialAnimation .linkedin div.connector {
        position: absolute;
        background-color: #f97316;
        height: 5px;
        width: 150px;
        margin: 8px 0 0 25px;
        transform: rotate(-190deg);
      }
      
      .socialAnimation .yt {
        width: 80px;
        height: 80px;
        margin: 210px 0 0 150px;
      }
      
      .socialAnimation .yt .containerImg {
        background-image: url("http://szymondziewonski.com/pictures/website/ytIcon.png");
        width: 70px;
        height: 70px;
        margin: 5px;
      }
      
      .socialAnimation .yt:hover .containerImg {
        background-image: url("http://szymondziewonski.com/pictures/website/ytIconHover.png");
      }
      
      .socialAnimation .yt div.connector {
        position: absolute;
        background-color: #f97316;
        height: 5px;
        width: 80px;
        margin: -5px 0 0 5px;
        transform: rotate(100deg);
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div ref={containerRef} className="socialAnimationWrapper">
      <ul className="socialAnimation">
        <li className="person">
          <img
            src="http://szymondziewonski.com/pictures/website/person.png"
            alt=""
          />
        </li>
        <li className="facebook">
          <div className="containerImg"></div>
          <div className="connector">
            <span className="one"></span>
            <span className="two"></span>
          </div>
        </li>
        <li className="googlePlus">
          <div className="containerImg"></div>
          <div className="connector">
            <span className="one"></span>
            <span className="two"></span>
          </div>
        </li>
        <li className="twitter">
          <div className="containerImg"></div>
          <div className="connector">
            <span className="one"></span>
            <span className="two"></span>
          </div>
        </li>
        <li className="linkedin">
          <div className="containerImg"></div>
          <div className="connector">
            <span className="one"></span>
            <span className="two"></span>
          </div>
        </li>
        <li className="yt">
          <div className="containerImg"></div>
          <div className="connector">
            <span className="one"></span>
            <span className="two"></span>
          </div>
        </li>
      </ul>
    </div>
  );
}

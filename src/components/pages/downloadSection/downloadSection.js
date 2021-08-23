import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import IllustrationPNG from "../../../assets/imgs/App Icon/PNG/googlapple/Vector Smart Object.png";
import Apple from "../../../assets/imgs/App Icon/PNG/googlapple/download-on-the-app-store-apple.png";
import PlayStore from "../../../assets/imgs/App Icon/PNG/googlapple/en_badge_web_generic.png";
export default function DownloadSection() {
    return (
      <>
        <div class=" pt-6 mx-auto">
          <div class="flex flex-wrap">
            <div class="md:w-3/5 w-full pb-6 md:pb-0 md:pr-6 lg:pl-64 lg:pt-12 download-app">
              <div class="">
                <h1 className="tracking-normal font-bold ">
                  Download our App now !
                </h1>
                <span className="text-lg pt-4">
                  The rise of mobile devices transforms the way we consume
                  information entirely and the world's most elevant channels
                  such as Facebook.
                </span>
                <div className="md:flex mt-4 icons">
                  <img className="google-image pr-2 " alt="google" src={PlayStore} />
                  <img className="apple-image " alt="apple" src={Apple} />
                </div>
              </div>
            </div>
            <div class="md:w-2/5 w-full">
              <div class="">
                <img
                  className="w-full"
                  alt="hero"
                  src={IllustrationPNG}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

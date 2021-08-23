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
            <div class="md:w-3/5 w-full pb-6 md:pb-0 lg:pl-24 xl:pl-64 xl:pt-12 md:pl-4 lg:pt-6 2xl:pt-2 download-app">
              <div class="">
                <h1 className="tracking-normal font-bold md:text-2xl Download-text">
                  Download our App now !
                </h1>
                <span className="text-lg pt-4 md:text-sm md:pt-0 download-span">
                  The rise of mobile devices transforms the way we consume
                  information entirely and the world's most elevant channels
                  such as Facebook.
                </span>
                <div className="md:flex md:flex xl:mt-3 md:pb-0 icons">
                  <img
                    className="google-image pr-2 "
                    alt="google"
                    src={PlayStore}
                  />
                  <img className="apple-image " alt="apple" src={Apple} />
                </div>
              </div>
            </div>
            <div class="md:w-2/5 w-full download-appimg">
              <div class="">
                <img
                  className="w-full 2xl:pl-72"
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

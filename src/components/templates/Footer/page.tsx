import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillGoogleCircle,
  AiFillYoutube,
} from "react-icons/ai";
export default function Footer() {
  return (
    <div className="p-5 bg-[#083344] h-1/2 text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between mb-5 mt-16 p-5">
        <div className="mb-5">
          <ul className="flex flex-col gap-3 text-left">
            <li className="text-white">Header</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li className="">
              <ul className="flex flex-row gap-8">
                <li className="icon">
                  <BsFacebook />
                </li>
                <li className="icon">
                  <AiFillGoogleCircle />
                </li>
                <li className="icon">
                  <AiFillInstagram />
                </li>
                <li className="icon">
                  <AiFillYoutube />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <ul className="flex flex-col gap-3">
            <li className="text-white">Header</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div className="mb-5">
          <ul className="flex flex-col gap-3 text-left">
            <li className="text-white">Header</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div className="mb-5">
          <ul className="flex flex-col gap-3">
            <li className="text-white">Header</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <p className="p-3">&copy;copyright 2023 - 2023 </p>
      </div>
    </div>
  );
}

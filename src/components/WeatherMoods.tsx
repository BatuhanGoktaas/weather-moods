import React, { useState, useEffect } from "react";
import apiService from "../services/apiService";
import { IDay } from "../models/day.model";

function WeatherMoods() {
  const [day, setDay] = useState<any>({});
  const [temperature, setTemperature] = useState<number>();

  const dates = new Date();
  const saat = dates.getHours();
  let dakika: string | number = dates.getMinutes();
  dakika = dakika < 10 ? "0" + dakika : dakika; //10'dan küçükse başına 0 ekliyor değilse direkt veriyor

  useEffect(() => {
    FetchDatas();
  }, []);

  function FetchDatas() {
    apiService
      .getDatas()
      .then((res) => {
        setDay(res.data.hourly);
        console.log(res.data.hourly.time);
        setTemperature(res.data.hourly.temperature_2m[saat]);
      })
      .catch((error) => console.error(error));
  }

  // res.data.hourly.temperature_2m[saat]

  function Weather() {
    return (
      <div className="">
        <div className="">
          {day.time
            ? day.time.map((time: string, index: React.Key) =>
                index === saat ? (
                  <p
                    className="fs-1"
                    key={index}
                  >{`Saat: ${saat}:${dakika} Sıcaklık: ${day.temperature_2m[saat]}°C `}</p>
                ) : null
              )
            : null}
        </div>
      </div>
    );
  }
  console.log(temperature);
  return (
    <div className="body">
      <div className="container">
        <div className="row align-items-center vh-100">
          <div className="col-lg-12 col-md-12 col-sm-12 mx-auto">
            <h3 className="fw-bold fs-1">HAVA DURUMU</h3>
            <div className="my-5 p-5" style={{ backgroundColor: " #000", opacity: 0.6 }}>
              {Weather()}

              {(() => {
                //IIFE
                if (temperature! < 6) {
                  return (
                    <div className="col justify-content-center align-items-center">
                      <div className="weather-snow">
                        <div className="snow">
                          <div className="f"></div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <text className="fs-2 text-white">Mode: Sick</text>
                      </div>
                    </div>
                  );
                } else if (temperature! >= 6 && temperature! < 11) {
                  return (
                    <div>
                      <div className="weather-cloud">
                        <div className="cloud"></div>
                        <div className="cloud"></div>
                      </div>
                      <div className="mt-5">
                        <text className="fs-2 text-white">Mode: Depressed</text>
                      </div>
                    </div>
                  );
                } else if (temperature! >= 11 && temperature! < 16) {
                  return (
                    <div className="col justify-content-center align-items-center">
                      <div className="weather-cloudAndSun">
                        <div className="cloud"></div>
                        <div className="sun">
                          <div className="rays"></div>
                          <div className="rays"></div>
                          <div className="rays"></div>
                          <div className="rays"></div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <text className="fs-2 text-white">Mode: Low</text>
                      </div>
                    </div>
                  );
                } else if (temperature! >= 16 && temperature! < 21) {
                  return (
                    <div className="col justify-content-center align-items-center">
                      <div className="weather-sun mt-4">
                        <div className="sun">
                          <div className="rays"></div>
                          <div className="rays"></div>
                          <div className="rays"></div>
                          <div className="rays"></div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <text className="fs-2 text-white">Mode: Cheerful</text>
                      </div>
                    </div>
                  );
                } else if (temperature! >= 21 && temperature! < 31) {
                  return (
                    <div className="col justify-content-center align-items-center">
                      <div className="weather-sun mt-4">
                        <div className="sun">
                          <div className="rays"></div>
                          <div className="rays"></div>
                          <div className="rays"></div>
                          <div className="rays"></div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <text className="fs-2 text-white">Mode: Joyful</text>
                      </div>
                    </div>
                  );
                } else if (temperature! >= 31 && temperature! < 35) {
                  return (
                    <div className="col justify-content-center align-items-center">
                      <div className="weather-sun mt-4">
                        <div className="sun">
                          <div className="rays"></div>
                          <div className="rays"></div>
                          <div className="rays"></div>
                          <div className="rays"></div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <text className="fs-2 text-white">Mode: Bored</text>
                      </div>
                    </div>
                  );
                } else if (temperature! >= 35) {
                  return (
                    <div className="col justify-content-center align-items-center">
                      <div className="weather-sun mt-4">
                        <div className="sun">
                          <div className="rays"></div>
                          <div className="rays"></div>
                          <div className="rays"></div>
                          <div className="rays"></div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <text className="fs-2 text-white">Mode: Angry</text>
                      </div>
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherMoods;

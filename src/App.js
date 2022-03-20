import { useState, useEffect } from 'react';

import { Counter } from './components/Counter';
import { Map } from './components/Map';
import { getData, countAirstrikes, getCorrectLocations } from './data';

const App = () => {
  const [cities, setCities] = useState([]);
  const populationDisplaced = 6300000;
  const [airstrikeCount, setAirstrikeCount] = useState(0);
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [temp, setTemp] = useState(0);

  const REFETCH_TIME = 300000;

  const operateData = (data) => {
    setAirstrikeCount(countAirstrikes(data));
    setCities(getCorrectLocations(data));
    setIsFetchingData(false);
  }

  useEffect(() => {
    setInterval(() => {
      setTemp((prevTemp) => prevTemp + 1)
    }, REFETCH_TIME)
  }, [])

  useEffect(() => {
    const updateData = () => {
      setIsFetchingData(true)
      getData(operateData);
    };
    updateData()
  }, [temp]);

  return (
    <div className="App">
      <main className="main container mx-auto max-w-5xl">
        <section>
          <div className="mb-4xl">
            <h2 className="uppercase md:text-3xl text-lg font-bold text-center mb-10">WHILE YOU ARE SLEEPING OR AT HOME UKRAINIAN PEOPLE CAN HEAR THE SIRENS</h2>
          </div>

          <div>
            <h2 className="uppercase t-sub text-center md:text-5xl text-2xl mb-2">UKRAINIAN POPULATION DISPLACED:</h2>
          </div>
          <Counter number={populationDisplaced} />

          <Map cities={cities} />

          <div className="airstrike flex md:items-center items-end justify-between">
            <Counter number={airstrikeCount} small>
              <p className="uppercase t-sub text-center md:text-3xl text-sm mb-2">
                {
                  isFetchingData
                    ? "Loading data"
                    : "Airstrike alerts today"
                }
              </p>
            </Counter>
            <p className="uppercase font-bold md:text-2xl text-lg mb-2">AIRSTRIKE ALERTS <br /> RIGHT NOW</p>
          </div>
          <div>
            <p className="uppercase mt-20 mb-20 font-bold md:text-3xl text-base text-center">
              THEY CAN NOT SLEEP, OR HAVE TO FLEE TO BOMB SHELTERS, AFRAID THAT THEIR HOUSE IS THE TARGET FOR RUSSIAN MISSILES
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

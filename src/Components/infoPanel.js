import React from 'react';
import GlobalStats from './GlobalStats';
import AllCountries from './AllCountries';
import Graphs from './Graphs';

export default function InfoPanel({ curentScreen }) {

  if (curentScreen === 0)
    return <GlobalStats />

  else if (curentScreen === 1)
    return <AllCountries />

  else if (curentScreen === 2)
    return <Graphs />

  else return <GlobalStats />
}

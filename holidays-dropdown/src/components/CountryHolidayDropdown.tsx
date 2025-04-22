import * as React from 'react';
import { useState, useEffect } from 'react';

const CountryHolidayDropdown: React.FC = () => {
  const [countries, setCountries] = useState<{ countryCode: string; name: string }[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  type Holiday = {
    date: string;
    localName: string;
    name: string;
    countryCode: string;
    fixed: boolean;
    global: boolean;
    counties?: string[] | null;
    launchYear?: number | null;
    types: string[];
  };

  const [holidays, setHolidays] = useState<Holiday[]>([]);

  useEffect(() => {
    // Otteniamo la lista delle nazioni
    fetch('https://date.nager.at/api/v3/AvailableCountries')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      // Recuperiamo le festività della nazione selezionata
      const year = new Date().getFullYear();
      fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${selectedCountry}`)
        .then(res => res.json())
        .then(data => setHolidays(data));
    }
  }, [selectedCountry]);

  return (
    <div>
      <select onChange={(e) => setSelectedCountry(e.target.value)} value={selectedCountry}>
        <option value="">Seleziona una nazione</option>
        {countries.map((c) => (
          <option key={c.countryCode} value={c.countryCode}>
            {c.name}
          </option>
        ))}
      </select>

      <ul>
        {holidays.map((holiday) => (
          <li key={holiday.date}>
            {holiday.date} - {holiday.localName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryHolidayDropdown;

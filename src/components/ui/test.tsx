import React, { useState } from 'react';
import { Country } from 'country-state-city';
import * as Flags from 'country-flag-icons/react/3x2';

type CountryOption = {
  isoCode: string;
  name: string;
};

const countries: CountryOption[] = Country.getAllCountries().map(c => ({
  isoCode: c.isoCode,
  name: c.name
}));

const Test = () => {
  const [selected, setSelected] = useState<CountryOption | null>(null);
  const [search, setSearch] = useState('');
  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <button onClick={() => setSelected(selected)}>Select Country</button>
      {selected && (
        <div>
          Flag:{' '}
          {React.createElement(
            (Flags as any)[selected.isoCode],
            { title: selected.name, style: { width: '24px' } }
          )}{' '}
          {selected.name}
        </div>
      )}

      {/* Modal */}
      <div className="modal">
        <input
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <ul>
          {filtered.map(c => (
            <li key={c.isoCode} onClick={() => setSelected(c)}>
              {React.createElement(
                (Flags as any)[c.isoCode],
                { title: c.name, style: { width: '20px' } }
              )}{' '}
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Test;
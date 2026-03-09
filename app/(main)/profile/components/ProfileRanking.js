'use client';

import { useState } from 'react';
import { BsBullseye } from 'react-icons/bs';
import { AiFillEnvironment } from 'react-icons/ai';

export default function ProfileRanking() {
  const [establishments] = useState([
    { id: 1, name: 'Establishment 1', city: 'City', state: 'State' },
    { id: 2, name: 'Establishment 2', city: 'City', state: 'State' },
    { id: 3, name: 'Establishment 3', city: 'City', state: 'State' },
    { id: 4, name: 'Establishment 4', city: 'City', state: 'State' },
    { id: 5, name: 'Establishment 5', city: 'City', state: 'State' },
  ]);

  return (
    <div>
      <h2 style={styles.title}>Ranking</h2>

      <div style={styles.list}>
        {establishments.map((establishment) => (
          <div key={establishment.id} style={styles.item}>
            <div style={styles.bullseye}>
              <BsBullseye size={30} color="black" />
            </div>

            <div style={styles.content}>
              <div style={styles.name}>{establishment.name}</div>
              <div style={styles.location}>
                <AiFillEnvironment size={17} style={{ marginRight: '4px' }} />
                {establishment.city}, {establishment.state}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  title: {
    fontFamily: 'var(--font-azeret-mono)',
    fontWeight: '400',
    fontSize: '20px',
    color: '#000',
    marginBottom: '12px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    background: '#b0b0b0',
    borderRadius: '10px',
    border: '1px solid #e0e0e0',
    width: '100%',
    height: '63px',
    position: 'relative',
  },
  content: {
    flex: 1,
    marginLeft: '50px',
  },
  bullseye: {
    width: '30px',
    height: '30px',
    left: '16px',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#000',
    marginBottom: '4px',
    fontFamily: 'var(--font-commissioner)',
  },
  location: {
    fontSize: '14px',
    color: '#000',
    fontFamily: 'var(--font-commissioner)',
    fontWeight: '400',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
};

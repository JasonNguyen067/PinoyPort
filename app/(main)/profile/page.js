'use client';
import { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { BsBullseye } from 'react-icons/bs';
import { AiFillEnvironment } from 'react-icons/ai';

export default function ProfilePage() {
  const [establishments, setEstablishments] = useState([
    { id: 1, name: 'Establishment 1', city: 'City', state: 'State' },
    { id: 2, name: 'Establishment 2', city: 'City', state: 'State' },
    { id: 3, name: 'Establishment 3', city: 'City', state: 'State' },
    { id: 4, name: 'Establishment 4', city: 'City', state: 'State' },
    { id: 5, name: 'Establishment 5', city: 'City', state: 'State' },
  ]);

  return (
    <div style={styles.pageContainer}>
        <h2 style={styles.title}>Ranking</h2>
        
        <div style={styles.list}>
          {establishments.map((establishment, index) => (
            <div key={establishment.id} style={{...styles.item, top: `${432 + index * 70}px`}}>
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
  pageContainer: {
    padding: '20px',
    width: '360px',
    height: '800px',
    margin: '0 auto',
    background: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
  },
  rankingSection: {
    marginTop: '20px',
  },
  title: {
    width: '92px',
    height: '24px',
    top: '403px',
    left: '25px',
    position: 'absolute',
    transform: 'rotate(0deg)',
    opacity: 1,
    fontFamily: 'var(--font-azeret-mono)',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#000',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    background: '#b0b0b0',
    borderRadius: '10px',
    border: '1px solid #e0e0e0',
    width: '310px',
    height: '63px',
    top: '712px',
    left: '25px',
    position: 'absolute',
    transform: 'rotate(0deg)',
    opacity: 1,
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
    lineHeight: '100%',
    letterSpacing: '0%',
  },
  location: {
    fontSize: '14px',
    color: '#000',
    fontFamily: 'var(--font-commissioner)',
    fontWeight: '400',
    lineHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  controls: {
    display: 'flex',
    gap: '8px',
  },
  button: {
    width: '36px',
    height: '36px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    background: '#666',
    cursor: 'pointer',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
};
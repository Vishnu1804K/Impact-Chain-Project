import React, { useContext } from 'react';
import './Discover.css';
import { DarkTheme } from '../../App';

const DiscoverCard = ({pic,para}) => {
  const darkModeData= useContext(DarkTheme);
  const cardStyle = darkModeData.darkMode
    ? {
        backgroundColor: '#333',
        color: '#fff',
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
      }
    : {
        backgroundColor: '#fff',
        color: '#333',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      };

  return (
    <div className="DiscoverCard" style={cardStyle}>
      <img
        src={pic}
        alt=""
      />
      <p style={{color:darkModeData.darkMode?"white":''}}>
        {para}
      </p>
    </div>
  );
};

const Discover = () => {
  const { darkMode } = useContext(DarkTheme);
  const containerStyle = darkMode
    ? { backgroundColor: '#222', padding: '20px' }
    : { backgroundColor: '#f5f5f5', padding: '20px' };

  return (
    <div className="DiscoverContainer" style={containerStyle}>
      <DiscoverCard para="Support healthcare initiatives by donating to organizations that provide medical aid, essential medicines, or fund research for curing diseases, especially in underprivileged communities with limited access to healthcare facilities." pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHzZvgPvWYmNOHaH57Bm1C1DuOrPX2nLV8AgCjeNfww&s"/>
      <DiscoverCard para="Invest in the future by donating to educational institutions, scholarship programs, or organizations that promote literacy, provide educational resources, or enable access to quality education for underprivileged children and adults, empowering them to break the cycle of poverty." pic="https://ischoolconnect.com/blog/wp-content/uploads/2021/10/564.jpg"/>
      <DiscoverCard para="In the aftermath of devastating wars and conflicts, countless lives are left shattered, with families displaced, homes destroyed, and communities torn apart. Donating to relief organizations that provide aid to post-war victims is a humanitarian act that can help alleviate their suffering, rebuild their lives, and restore hope" pic="https://png.pngtree.com/thumb_back/fw800/background/20231130/pngtree-watercolor-illustration-of-indian-army-soldier-holding-flag-india-image_15494951.jpg"/>
      <DiscoverCard para="Contribute to alleviating hunger and malnutrition by donating non-perishable food items, funds, or volunteering at local food banks, soup kitchens, or community organizations that distribute meals to those in need." pic="https://img.freepik.com/premium-vector/donation-boxes-with-canned-food-illustration-freshly-prepared-food-packaged-sealed-jars-helping-people-need-poor-people-giving-out-charities-saving-from-hunger-vector-kindness_146957-1033.jpg"/>
    </div>
  );
};

export default Discover;
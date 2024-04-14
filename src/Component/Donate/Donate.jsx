import { TextField, Button } from '@mui/material'
import React, { useContext } from 'react'
import './Donate.css'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { DarkTheme } from '../../App'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Donate = () => {
  const darkModeData = useContext(DarkTheme);

  const containerStyle = darkModeData.darkMode ? { color: 'white', backgroundColor: '#333' } : {};
  const textFieldStyle = darkModeData.darkMode ? { color: 'white' } : {};
  const inputBaseStyle = darkModeData.darkMode ? { color: 'white' } : {};

  return (
    <div className='DonateContainer' style={containerStyle}>
      <div className="firsthalf">
        <h1>How Donating Works</h1>
        <p>Thank you for deciding to donate to our cause. To donate we strictly use SOL to maintain anonymity and transparency. Please follow the steps below to donate.

Connect your wallet to the Solana blockchain.
Select the amount you would like to donate.
Click the donate button to complete the transaction.</p>
        <form className='formDonate'>
          <ConnectButton>
          <Button variant="contained" startIcon={<AccountBalanceWalletIcon />}>
            Wallet
          </Button>
          </ConnectButton>
          <TextField
            label="Donate..."
            variant="outlined"
            type="text"
            id="Donate"
            name="Donate"
            style={textFieldStyle}
            InputProps={{ style: inputBaseStyle }}
          />
          <Button variant="outlined" endIcon={<AttachMoneyIcon />}>Donate Now</Button>
        </form>
      </div>
      <div className="secondhalf">
        <img src="https://img.freepik.com/premium-vector/money-charity-donation-illustration\_181313-1014.jpg" alt="" />
      </div>
    </div>
  )
}

export default Donate
import { useEffect, useState } from "react";

window.ethereum = undefined;
const WalletConnect = () => {
    const [account, setAccount] = useState(null);

    // Function to handle connecting to MetaMask
    const connectMetaMask = async () => {
        // 1. Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            try {
                // 2. Request the user's accounts
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                // 3. If successful, set the first account as the connected account
                setAccount(accounts[0]);
            } catch (error) {
                // 4. If the user rejects the connection, log an error
                console.error('User rejected the connection:', error);
            }
        } else {
            // MetaMask is not installed
            alert('MetaMask is not installed. Please install it to use this feature.');
        }
    };

    // Function to handle disconnecting from MetaMask
    const disconnectMetaMask = () => {
        setAccount(null);
    };

    useEffect(() => {
        // 1. Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            // 2. Function to handle account changes
            const handleAccountsChanged = (accounts) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                } else {
                    setAccount(null);
                }
            };

            // 3. Function to handle chain changes
            const handleChainChanged = () => {
                window.location.reload();
            };

            // 4. Listen for account changes
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            // 5. Listen for network changes
            window.ethereum.on('chainChanged', handleChainChanged);

            // 6. Cleanup listeners on unmount
            return () => {
                if (window.ethereum.removeListener) {
                    window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                    window.ethereum.removeListener('chainChanged', handleChainChanged);
                }
            };
        }
    }, []);

    return (
        <div>
            {
                account
                    ? <button className={'bg-purple-900 font-bold'} onClick={disconnectMetaMask}>Connected</button>
                    : <button className={'font-bold'} onClick={connectMetaMask}>Connect Wallet</button>
            }
        </div>
    );
};

export default WalletConnect;

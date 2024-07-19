import {useEffect, useState} from "react";

window.ethereum = undefined;
const WalletConnect = () => {
    const [account, setAccount] = useState(null);

    {
        console.log(account)
    }

    const connectMetaMask = async () => {
        // 1. Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            // MetaMask is installed
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

    const disconnectMetaMask = () => {
        setAccount(null);
    };

    useEffect(() => {
        // 1. Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            // MetaMask is installed
            // 2. Listen for account changes
            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length > 0) {
                    // 3. If there are accounts, set the first account
                    setAccount(accounts[0]);
                } else {
                    // 4. If no accounts, set account to null
                    setAccount(null);
                }
            });

            // 5. Listen for network changes
            window.ethereum.on('chainChanged', (chainId) => {
                // 6. Reload the page on network change
                window.location.reload();
            });
        }
    }, []);


    return (
        <div>
            {
                account
                    ? <button className={'bg-purple-900 font-bold'} onClick={disconnectMetaMask}>Connected</button>
                    : <button className={'font-bold'} onClick={connectMetaMask}>Connect Wallet</button>
            }
            {/*<button onClick={connectMetaMask}>Connect MetaMask</button>*/}
            {/*{account ? <p>Connected: {account}</p> : <p>Not connected</p>}*/}
        </div>
    );
};

export default WalletConnect;

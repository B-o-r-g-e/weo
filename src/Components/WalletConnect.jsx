import { useEffect, useState } from "react";

const WalletConnect = () => {
    const [account, setAccount] = useState(null);

    const isMobile = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return /android|iphone|ipad|ipod/i.test(userAgent);
    };

    const connectMetaMask = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
            } catch (error) {
                console.error('User rejected the connection:', error);
            }
        } else if (isMobile()) {
            alert('MetaMask is not installed. Please install it to use this feature.');
        } else {
            alert('MetaMask is not installed. Please install it to use this feature.');
        }
    };

    const disconnectMetaMask = () => {
        setAccount(null);
    };

    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            const handleAccountsChanged = (accounts) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                } else {
                    setAccount(null);
                }
            };

            const handleChainChanged = () => {
                window.location.reload();
            };

            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', handleChainChanged);

            return () => {
                if (window.ethereum.removeListener) {
                    window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                    window.ethereum.removeListener('chainChanged', handleChainChanged);
                }
            };
        } else {
            console.log('window.ethereum is undefined');
        }
    }, []);

    return (
        <div>
            {account ? (
                <button className={'bg-purple-900 font-bold'} onClick={disconnectMetaMask}>Connected</button>
            ) : (
                <button className={'font-bold'} onClick={connectMetaMask}>Connect Wallet</button>
            )}
        </div>
    );
};

export default WalletConnect;

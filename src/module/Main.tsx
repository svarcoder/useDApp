import { useConnector, useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "ethers/lib/utils";

const Main = () => {
	const { connector } = useConnector();
	const { activateBrowserWallet, account, chainId, deactivate } = useEthers();
	const etherBalance = useEtherBalance(account);

	return (
		<div className='wrapper'>
			<div className='card'>
				<div className='card-header text-center'>useDApp</div>
				<div className='card-body'>
					{!account ? (
						<div className='d-flex justify-content-between'>
							<button
								className='btn btn-outline-primary'
								onClick={() => {
									console.log("ss");
									activateBrowserWallet({ type: "metamask" });
								}}>
								{" "}
								Connect Metamask{" "}
							</button>
							<button
								className='btn btn-outline-primary'
								onClick={() => activateBrowserWallet({ type: "coinbase" })}>
								{" "}
								Connect Coinbase Wallet{" "}
							</button>
							<button
								className='btn btn-outline-primary'
								onClick={() =>
									activateBrowserWallet({ type: "walletConnect" })
								}>
								{" "}
								Connect Wallet Connect{" "}
							</button>
							<button
								className='btn btn-outline-primary'
								onClick={() => activateBrowserWallet({ type: "portis" })}>
								{" "}
								Connect Portis{" "}
							</button>
						</div>
					) : (
						<>
							<div className='text-break'>
								ChainId: {chainId ? chainId : "-----"}
							</div>
							<div className='text-break'>
								Account: {account ? account : "-----"}
							</div>
							<div className='text-break'>
								Balance: {etherBalance ? formatEther(etherBalance) : "-----"}
							</div>
							<div className='text-break'>
								Connected with:{" "}
								{connector ? connector?.connector?.name : "-----"}
							</div>
							<div className='d-flex justify-content-center'>
								<button
									className='btn btn-outline-danger'
									onClick={() => deactivate()}>
									{" "}
									Disconnect{" "}
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Main;

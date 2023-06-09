import {
	Arbitrum,
	CoinbaseWalletConnector,
	Config,
	Goerli,
	Mainnet,
	MetamaskConnector,
} from "@usedapp/core";
import { getDefaultProvider } from "ethers";
import { WalletConnectConnector } from "@usedapp/wallet-connect-connector";
import { PortisConnector } from "@usedapp/portis-connector";

/**
 * Represents config for daap provider and set connector.
 * @config
 */
export const config: Config = {
	readOnlyChainId: Mainnet.chainId,
	readOnlyUrls: {
		[Mainnet.chainId]: getDefaultProvider("mainnet"),
		[Goerli.chainId]: getDefaultProvider("goerli"),
		[Arbitrum.chainId]: "https://arb1.arbitrum.io/rpc",
	},
	connectors: {
		metamask: new MetamaskConnector(),
		walletConnect: new WalletConnectConnector({
			infuraId: "d8df2cb7844e4a54ab0a782f608749dd",
		}),
		coinbase: new CoinbaseWalletConnector(),
		portis: new PortisConnector(
			process.env.REACT_APP_PORTIS_DAPP_ID as string,
			"mainnet"
		),
	},
};

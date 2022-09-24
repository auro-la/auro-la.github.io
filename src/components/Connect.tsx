import { Button, Group } from "@mantine/core";
import { useEthers } from "@usedapp/core";
import { Chain } from "../utils/chains";

const Connect = () => {
  const { activateBrowserWallet, switchNetwork, account, chainId } =
    useEthers();
  return (
    <Group>
      {!account && (
        <Button
          onClick={activateBrowserWallet}
          radius="md"
          variant="light"
          color="teal"
          uppercase
          fullWidth
        >
          Connect
        </Button>
      )}
      {account && chainId !== Chain.chainId && (
        <Button
          onClick={() => {
            switchNetwork(Chain.chainId);
          }}
          radius="md"
          variant="light"
          color="teal"
          uppercase
          fullWidth
        >
          Network
        </Button>
      )}
      {account && chainId === Chain.chainId && (
        <Button variant="subtle" color="teal" uppercase fullWidth>
          {account.slice(0, 4)}..{account.slice(-2)}
        </Button>
      )}
    </Group>
  );
};

export default Connect;

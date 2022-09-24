import { Footer, Button, Group, MediaQuery } from "@mantine/core";
import {
  IconQuestionMark,
  IconBrandGithub,
  IconPackage,
  IconGhost,
} from "@tabler/icons";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <Footer
      height={60}
      p="md"
      style={{ background: "none", border: 0, zIndex: 0 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Group>
          <Button
            variant="light"
            color="cyan"
            compact
            leftIcon={<IconQuestionMark size={14} />}
            component={Link}
            to="/faq"
          >
            FAQ
          </Button>
        </Group>
        <Group>
          <Button
            variant="light"
            color="violet"
            compact
            leftIcon={<IconBrandGithub size={14} />}
            component="a"
            href="https://github.com/auro-la"
            target="_blank"
          >
            GitHub
          </Button>
        </Group>
      </div>
    </Footer>
  );
};

export default Bottom;

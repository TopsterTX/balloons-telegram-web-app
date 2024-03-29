import { CustomButton } from "components/ui";
import { ButtonGroup } from "@chakra-ui/react";

export const BalloonTypes = () => {
  return (
    <ButtonGroup display="flex" alignItems="center" width="100%" spacing={0}>
      <CustomButton
        colorScheme="white"
        variant="filled"
        width="100%"
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
      >
        Фальгированные
      </CustomButton>
      <CustomButton
        colorScheme="white"
        width="100%"
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
      >
        Обычные
      </CustomButton>
    </ButtonGroup>
  );
};

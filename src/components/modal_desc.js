import React from 'react';
import {
  ModalDescBackground,
  Text,
  Title,
  ButtonContainer,
  Button,
  Link
} from '.././styledComponents/modal_desc.style';

const ModalDesc = ({project}) => {
  return (
    <ModalDescBackground>
      <Text>
        <Title>Project:</Title> {project.name}
      </Text>
      <Text>
        <Title>Tech:</Title> {project.tech}
      </Text>
      <Text>
        <Title>Description:</Title> {project.desc}
      </Text>
      <ButtonContainer>
        <Button>
          <Link href={project.link}>Visit the site</Link>
        </Button>
      </ButtonContainer>
    </ModalDescBackground>
  );
};

export default ModalDesc;

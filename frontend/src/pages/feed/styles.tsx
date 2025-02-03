import styled from 'styled-components';

// Estilos com styled-components
export const CatalogContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CatalogTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
`;

export const CarouselWrapper = styled.div`
  margin-top: 20px;
`;

export const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;
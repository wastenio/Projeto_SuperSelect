import Slider from 'react-slick';
import { CatalogContainer, CatalogTitle, CarouselWrapper, CarouselItem } from '../../pages/feed/styles';


const Feed = () => {
    // Dados do carrossel (exemplo)
    const carouselData = [
        { id: 1, image: '\assets\icons8-check-50.png' },
        { id: 2, image: '' },
        // { id: 3, image: 'https://via.placeholder.com/300x200?text=Produto+3' },
        // { id: 4, image: 'https://via.placeholder.com/300x200?text=Produto+4' },
        // { id: 5, image: 'https://via.placeholder.com/300x200?text=Produto+5' },
    ];

    // Configurações do slick carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: false, // Desativa o foco automático
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <CatalogContainer>
            <CatalogTitle>Catálogo de Produtos</CatalogTitle>
            <CarouselWrapper>
                <Slider {...settings}>
                    {carouselData.map((item) => (
                        <CarouselItem key={item.id}>
                            <img src={item.image} alt={`Produto ${item.id}`} />
                        </CarouselItem>
                    ))}
                </Slider>
            </CarouselWrapper>
        </CatalogContainer>
    );
};

export { Feed };

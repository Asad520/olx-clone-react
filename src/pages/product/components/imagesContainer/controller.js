export default function useImagesCOntainer(props) {
  const renderImages = (productImages) =>
    productImages.map((image, index) => (
      <button className='small-image' key={index}>
        <picture>
          <source type='image/webp' srcSet={image} />
          <img
            title='Husky puppies 0'
            src={image}
            alt='Product img icon'
            className='image-icon'
          />
        </picture>
      </button>
    ));

  return { ...props, renderImages };
}

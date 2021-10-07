import '../../../../assets/css/product-details-styles.css';

export default function ProductDetails() {
  return (
    <>
      <div className='product-details-container'>
        <h5 className='fw-bold'>Details</h5>
        <div className='product-details'>
          <span className='product-keys'>Price</span>
          <span className='product-values'>110,000</span>
          <span className='product-keys'>Type</span>
          <span className='product-values'>Other Breeds</span>
        </div>
        <h5 className='description-heading'>Description</h5>
        <p className='description'>
          age 2 months BLUE EYE non pedigree gud looking white color ND FLUFFY
          WOOLLEY EXTREMELY WOOLLEY
        </p>
      </div>
    </>
  );
}

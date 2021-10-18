export default function useFooter() {
  const renderFooterCategories = (categories) =>
    categories.map((category) => (
      <div key={category.id} className='footer-category'>
        {category.name}
      </div>
    ));

  return [renderFooterCategories];
}

export default function useFooter(props) {
  const renderFooterCategories = (categories) =>
    categories.map((category) => (
      <div key={category.id} className='footer-category'>
        {category.name}
      </div>
    ));

  return { ...props, renderFooterCategories };
}
